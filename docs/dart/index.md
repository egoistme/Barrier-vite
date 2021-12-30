# Dart语言概览
## main()函数
每个应用都有一个mian()函数，例如使用mian()打印一段文本：

```dart
void main(){
  print('Hello, World!');
}
```

```shell
hello
Exited
```
## 变量
dart是一种类型安全语言，不过支持类型推断，因此大多数变量都不需要显式地指定类型：

```dart
//利用字面量创建变量
var name = '楚留香';
var year = 2021;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
//也可以直接指定类型
int a = 'barrier';
```
## 流程控制语句
与大部分语言相同

```dart 
if( year >= 2021 ){
  print( '21th century' );
}else if (year < 2121) {
  print( '20th century' );
}

for( final a in obj ){ 
   print(a)
}

for( int month = 1; month <= 12; month++ ){
  print(month)
}

while( year < 2021 ){
  year++
}
```
## 函数
语法与js类似，支持箭头函数，**建议为每一个函数的参数及返回值都指定类型**

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
print(result) //6765

var arr = [1, 2, 3, 4, 5, 6,];
arr.forEach((element) => print(element));
```
```dart
flybyObjects.where((name) => name.contains('turn')).forEach(print);//Saturn
```
where()是一个查询方法，返回一个过滤之后的数组，参数可以是一个匿名函数，将print函数作为参数传入forEach将会直接打印数组内的项。

## 注释
使用 // 作为单行注释，/* */可以多行注释，///作为文档注释

```dart
//you can't know for certain the outcome of any expriment

/* 
落霞与孤鹜齐飞，
秋水共长天一色。
*/

/// 这是一个文档注释。
/// 文档注释用于为库、类以及类的成员添加注释。
/// 像 IDE 和 dartdoc 这样的工具可以专门处理文档注释。

```
## 导入
使用import关键字来访问其他库中定义的API
```dart
// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';
```

## 类
```dart
class Spacecraft {
  String name;
  DateTime? launchDate;

  int get launchYear => launchDate?.year;
  
  //构造函数
  Spacecraft(this.name, this.launchDate) {

  }

  Spacecraft.unlaunched( String name ) : this(name, null);

  //方法
  void describe(){
    print('Spacecraft: $name');

  }
}
```

## 异步
使用`async` 和`await`关键字可以避免毁掉地狱，并且使代码更具可读性。
```dart
const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}
```

## 异常
使用`throw`关键字抛出异常
```dart
if (astronauts == 0) {
  throw StateError('No astronauts.');
}
```

使用`try`语句配合`on`或`catch`捕获异常
```dart
try {
  for (final object in flybyObjects) {
    var description = await File('$object.txt').readAsString();
    print(description);
  }
} on IOException catch (e) {
  print('Could not describe object: $e');
} finally {
  flybyObjects.clear();
}
```