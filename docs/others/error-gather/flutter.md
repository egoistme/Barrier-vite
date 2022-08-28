## flutter run命令无法热重载
在vs code中`flutter run`命令后还需要在终端按下r才可以刷新内容，直接使用右上角`start debugging`就可以热重载了

## flutter 运行到指定设备
```sh
flutter devices
```
查看设备列表
```sh
iPhone 13 (mobile) • 1E6CC862-7EC7-4FCF-889E-92F61F513E7C • ios            • com.apple.CoreSimulator.SimRuntime.iOS-15-4 (simulator)
Chrome (web)       • chrome                               • web-javascript • Google Chrome 100.0.4896.88
```

```sh
flutter run -d 1E6CC862-7EC7-4FCF-889E-92F61F513E7C 
```

## 快速添加statefulClass
```sh
stf
```