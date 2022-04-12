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
const singleton2= Singleton.getInstance()

console.log(singleton1===singleton2) //true

