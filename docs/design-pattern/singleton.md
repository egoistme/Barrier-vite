# 单例模式

## 意图
保证一个类只有一个实例，并提供一个访问他的全局访问点。
## 实现
![singleton-20211224112208-2021-12-24-11-22-09](https://egoist-markdown-image-bucket.oss-cn-beijing.aliyuncs.com/singleton-20211224112208-2021-12-24-11-22-09.png)

1. 私有化静态成员变量用于保存单例实例。
2. 私有化构造函数。
3. 声明一个公有静态方法（getInstance）用于获取实例。（受控访问）
4. geInstance中添加条件判断实例是否已存在，存在则返回已有实例，否则创建实例。

以上的实现被称为**懒汉式**，说的是懒汉只会张嘴等别人喂（只有客户类调用了`getInstance()`才会创建实例），
### 懒汉式

```ts
class Singleton {
  private static instance: Singleton;
  private constructor() { }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton()
    }
    return this.instance
  }
  print(){
    console.log('I am Iron Man.')
  }
}

const singleton1 = Singleton.getInstance()
const singleton2 = Singleton.getInstance()
singleton1.print()//I am Iron Man.
console.log(singleton1===singleton2) //true
```

那么这种模式有什么问题呢？**线程不安全**，前端问题不大，因为js是单线程的，但是后端就会碰到这样一个问题，如果多个线程同时调用了`getInstance()`，那么它们都能通过if判断，就会创建两个实例，显然与我们的意图不相符。<br/>
那么如何解决这个问题呢？很简单，在类初始化的时候直接创建实例即可，这被称为**饿汉式**，饿了就自己吃的嘛（主动创建实例）。

### 饿汉式

```ts
class Singleton {
  private constructor() { }
  private static instance = new Singleton();

  static getInstance() {
    return this.instance
  }
  print(){
    console.log('I am Iron Man.')
  }
}

const singleton1 = Singleton.getInstance()
const singleton2 = Singleton.getInstance()

singleton1.print();
console.log(singleton1===singleton2) 
```

虽然我们解决了线程不安全的问题，但是同时也带来了另一个问题，性能消耗，在实际的业务中，单例类有可能会承担比较繁重的工作，创建实例的代码较多，在类初始化创建会比较占用资源。有没有一种办法，又能按需创建，又能线程安全呢？这里需要用到一个工具，**线程锁**，线程锁会在第一个线程访问时禁止其他线程访问。但是加锁之后也是需要稍微改动我们的代码。
来看以下这种被称为**双检锁**的实现：
### 双检锁

```go
// https://github.com/go-sql-driver/mysql
type singleton struct {
	DB *sql.DB
}

var (
	instances map[string]*singleton // dbkey->instance
	mu        sync.Mutex  
)

func init() {
	instances = make(map[string]*singleton)
} 

func GetInstance(dbkey string) (*singleton, error) {
	var err error

	if _, ok := instances[dbkey]; ok {
		return instances[dbkey], nil
	} else {
		mu.Lock()
		defer mu.Unlock() 

		if instance, ok := instances[dbkey]; !ok {
      //create instance      
		} else {
			return instances[dbkey], nil
		}
	}
}
```
1. 多个线程进入GetInstance，发现instances[dbkey]不为空，返回实例。
2. 不为空，进入else分支，争抢同一个锁，第一个线程争抢成功。
3. 再次判断instances[dbkey]是否为空，是则创建实例，否则返回该实例。
4. 解锁。

由于需要两次判断（锁前锁后），因此被称为双检锁（double check + lock），这种方式很好地解决了懒汉式和饿汉式的问题，具体使用哪一种还是视具体场景而定。