


## 介绍
editorjs是一款免费的块级编辑器开源库，基于各种API和插件，可以实现标题、正文、列表、链接、图片等功能，官网https://editorjs.io/。
### 特色
#### 块级编辑器
![editorjs的使用-20220220222120-2022-02-20-22-21-20](https://egoist-markdown-image-bucket.oss-cn-beijing.aliyuncs.com/editorjs的使用-20220220222120-2022-02-20-22-21-20.png)

区别于传统富文本，每次按下回车并不是单纯的换行，而是新增一个内容块。每一个内容块都有独立的格式，这会使得笔记的结构更加的清晰，对于轻笔记而言是相比富文本更加简洁高效的选择。
#### clean Data
editorjs最大的特色是输出**clean Data**，也就是json数据。
```js
{
    "time" : 1645365822763,
    "blocks" : [
        {
            "id" : "R4gQy_uIJ0",
            "type" : "header",
            "data" : {
                "text" : "Editor.js",
                "level" : 2
            }
        },
        {
            "id" : "PCrZup9NK6",
            "type" : "paragraph",
            "data" : {
                "text" : "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
            }
        },
    ],
    "version" : "2.23.1"
}
```
传统的富文本一般是输出html字符串，使用范围有限，如何渲染基本是固定的，而json数据则更加自由，你可以选择在web、移动端完全不同地使用源数据。

## 使用
步骤很简单
1. 下载editorjs
2. 配置并初始化编辑器
3. 下载并配置插件、工具

### 下载
在项目中可以选用Node包或者CDN的方式引入。
以我们的项目为例
```bash
npm i @editorjs/editorjs -S
```
然后在项目内新建一个新的组件，引入
```js
import Editorjs from '@editorjs/editorjs';
```
### 初始化
editorjs的初始化需要一个容器，在template中创建一个id为editorjs的div
```html
<div id="editorjs"></div>
```
然后在mounted()函数中创建实例
```js
mounted(){
  const editor = new Editorjs({
    holder:'editorjs'
  })
}
```
此时一个能用的编辑器就被渲染到div的位置了
![editorjs的使用-20220220223722-2022-02-20-22-37-22](https://egoist-markdown-image-bucket.oss-cn-beijing.aliyuncs.com/editorjs的使用-20220220223722-2022-02-20-22-37-22.png)

支持基本的输入并显示。
### 插件
只有基本文字的输入是满足不了我们的需求的，我们至少还需要“标题”、“列表”这两个格式，官方已经直接提供了这两个插件，直接下载使用就可以了。（附：官网提供的插件列表https://github.com/editor-js）

#### 下载
```bash
npm i @editorjs/header @editorjs/list -S
```
#### 引入
```js
import Header from '@editorjs/header';
import List from '@editorjs/list';
```
#### 使用

在编辑器初始化的使用配置即可
```js
mounted(){
  const editor = new Editorjs({
    holder:'editorjs',
      tools: {
        header: Header,
        list: List
      ,
  })
}
```
现在已经拥有了标题和列表
![editorjs的使用-20220220224823-2022-02-20-22-48-23](https://egoist-markdown-image-bucket.oss-cn-beijing.aliyuncs.com/editorjs的使用-20220220224823-2022-02-20-22-48-23.png)

编辑器的基本初始化已经完成，接下来是一些针对项目的优化。
### 自动保存
需求：在每次编辑器输入后能够自动保存。
要实现自动保存有两个要素：
1. 保存的API
2. 监测每次文档变动的API
  
#### 保存APi
文档中专门有一部分介绍了`save()` 方法（https://editorjs.io/saving-data）
这个方法将会返回一个`Promise`，因此我们使用`async await`组合来获取输出的数据，结合我们的saveNode接口，让每一次保存都能发送至后端。
```js
   async save() {
      this.saveLoding = true;
      const content = await this.editor.save();
      const res = await sendNote(this.conversationId, content);
      this.saveLoading = false
    },
```

#### 监测文档变化
在文档中我们能找到一个配置项列表的链接https://github.com/codex-team/editor.js/blob/next/types/configs/editor-config.d.ts
其中有一个onChange配置项，传入一个回调函数，它将会在每次文档变化时被调用。
```js
onChange: this.onChange,
```
这里需要防抖
```js
onChange(api, e) {
  this.timer && clearTimeout(this.timer);
  this.timer = setTimeout(() => {
    this.save();
  }, 2000);
}
```
### 中文显示
editorjs的默认语言是英文：
![editorjs的使用-20220220230907-2022-02-20-23-09-08](https://egoist-markdown-image-bucket.oss-cn-beijing.aliyuncs.com/editorjs的使用-20220220230907-2022-02-20-23-09-08.png)

我们需要翻译一下。在配置项列表中，可以知道它支持国际化（i18n）选项，我们只需要参照https://editorjs.io/internationalization 默认国际化选项列表和各个插件的国际化选项列表（比如https://github.com/editor-js/list中的i18n选项），即可创建我们自己的国际化配置文件
![editorjs的使用-20220220231400-2022-02-20-23-14-00](https://egoist-markdown-image-bucket.oss-cn-beijing.aliyuncs.com/editorjs的使用-20220220231400-2022-02-20-23-14-00.png)

然后将其引入我们的组件中即可
```js
import i18n from './i18nConfig';

new Editorjs({
  i18n
})
```


