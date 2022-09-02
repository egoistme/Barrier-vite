# 利用cz工具集做提交规范
在多人协作时如果提交说明不规范，那么commit history的价值将会降低，在定位bug的时候几乎起不到什么作用。这时规范的作用就很有效了。

首先使用commitlint工具规范commit message，不符合规范的拒绝提交。
我们需要用到以下工具：
husky：Git hooks工具，可以让我们方便地添加Git hooks。
commitlint：commit规范检查工具，配合husky可以在提交前对git message做校验。
@commitlint/config-conventional：一个angular风格的commit message规则，是commitlint的补充，但是也可以不用这个规则。自己配置rule。
commitizen：提供交互式commit的工具，需要额外的适配器才能发挥功能。
cz-customizable：commitizen适配器，比官方提供的cz-conventional-changelog还要好用一些，可以自定义规则。需要写 .cz-config.js


为什么不是？
cz-conventional-changelog
不可以跳过问题

cz-commitlint
移动上下光标会出现多行提示的bug
git-cz

\n换行
https://github.com/streamich/git-cz/issues/169
cz-git
配置丰富，但是运行时会报错



npm install --save-dev commitizen
https://github.com/commitizen/cz-cli
https://github.com/conventional-changelog/commitlint
https://www.qbenben.com/ cz-git
https://www.csdn.net/tags/OtDaEg4sMzczODUtYmxvZwO0O0OO0O0O.html 综合说明