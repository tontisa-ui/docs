# web前端规范

**无规矩不成方圆**，一个团队高效的开发更离不开规范，一套完整的开发规范可提供团队每个员工的效率，让我们可以更专注于业务逻辑代码；但是每个人都有自己的代码风格，习惯一件事之后是很难改变的，所以我们从心里认同它、认同它、认同它；以下规范是我翻阅多方资料并结合自己平时的一些经验整理出来的，从中肯定还有诸多不足，希望大家可以一起帮忙纠正；
> 我的梦想是让我们一起快乐的写出优雅的代码！

--------
[TOC]

## 常用规范
### 命名规则
#### 目录/文件命名
**项目命名：**全部采用小写方式， 以下划线“`_`”分隔。
> 例：my_project_name

**目录命名：**全部采用小写方式， 以下划线“`_`”分隔; 有复数结构时，要采用复数命名法。
> 例：styles, images, data_models

**html文件命名：**全部采用小写方式， 以下划线“`_`”分隔;
> // 页面信息类型`_`页面交互类型`_`其他修饰(如果需求)；
> 例：line_list_search.html、news_detail.html

**css，scss，less文件命名：**全部采用小写方式， 以点“`.`”分隔;
> 例：style.min.css

**js文件命名：**全部采用小写方式， 以点“`.`”
> 例：lib.config..min.js

#### html属性命名
- class 全部采用小写方式， 以中划线“`-`”分隔;
`例：class="class-name"`
- id 全部采用小驼峰，只在有JS调用或锚点时使用id
`例：id="idName"`
- boolean属性，存在表示取值为true，不存在则表示取值为false。
```
// not good
<input type="checkbox" value="1" checked="checked">
// good
<input type="checkbox" value="1" checked>
```
- class命名简写可参考 [class命名简写](http://tontisa.github.io)

#### js变量命名
- 变量
```
// 普通变量，全部采用小驼峰
var myName = '张三';
// 私有变量，首字母采用下划线“_”，后面采用小驼峰
var _mySecret = '不告诉你';
// jQuery对象，首字母采用下划线“$”，后面采用小驼峰
var $body = $('body');
// 数组，采用小驼峰，末尾加s，
var results = [1, 2, 3];
```
- 常量
```
// 常量，全部采用大写，使用下划线“_”分隔
var MAX_COUNT = 10;
```
- 函数
```
/* 函数命名，全部采用小驼峰；前缀为动词 */

//是否可阅读
function canRead(){
    return true;
}
//获取姓名
function getName{
    return this.name
}
```
|  动词 |    含义                     | 返回值  |
| :----| ---------------------------| -- |
| can  | 判断是否可执行某个动作 ( 权限 ) | 函数返回一个布尔值。true：可执行；false：不可执行  |
| has  | 判断是否含有某个值             | 函数返回一个布尔值。true：含有此值；false：不含有此值   |
| is   | 判断是否为某个值               | 函数返回一个布尔值。true：为某个值；false：不为某个值  |
| get  | 获取某个值 | 函数返回一个非布尔值 |
| set  | 设置某个值 | 无返回值、返回是否设置成功或者返回链式对象  |
- 类
```
// 类，全部采用大驼峰
var myClass = new MyClass();
```
- this
```
// this，只使用'_this', 'that', 'self'其中一个来命名；
var _this = this;
var that = this;
var self = this;
```
### 操作状态
#### 页面状态
>- 正常显示页面
- 页面不存在404
- 服务器请求出错 500
- 页面登录超时
- 网络连接异常

####  请求状态
>- 正常显示数据
- 正在加载数据
- 请求成功，但没有数据
- 请求成功，有数据
- 请求成功，服务器抛出异常
- 请求失败

####  表单元素状态
>- 默认
- 鼠标经过
- 获取焦点/鼠标点击
- input 禁用
- loading 按钮
- 禁用按钮

#### `<a>`标签状态
>- 默认
- 鼠标经过
- 鼠标点击
- 已访问
- 已禁用

### icon图标
#### @font-face 图标字体
推荐使用 [iconfont.cn](http://iconfont.cn/) 管理项目图标库；推荐`移动端项目`使用
1. 打开网站申请账号；
2. 新建项目图标库；
3. 查找图标，添加到对应项目图标库；
4. 打开对应项目图标库，选择Unicode，查看在线链接，将代码复制到css文件中即可使用；
#### sprite 图片精灵
`sprite` 图片将图标图形整合在一起，通过改变css中的background-position调用图片，可以减少大量的http请求；
**注意：** 由于移动端的dpr是PC的2倍以上，所以在移动端使用时需要 2倍 Retina（图片是实际使用时的2倍数px）;
> sprite工具使用 [spriteBox](http://www.spritebox.net) 自动合成 sprite 图片 并且生成 css
> 相关文章：[使用Compass生成雪碧图](http://www.w3cplus.com/preprocessor/compass-image-sprite.html)，结合spriteBox; 大家有更好的工具也可以推荐给我；

### 缩进
>html,css,js全部采用2个空格(space) 进行缩进

### 引号
- js 全部采用单引号('')
- html 全部采用双引号("")
- CSS中URI值（url()）不要使用引号

### 注释
- `<!-- html 注释 -->`
- `/* css，scss，less 注释 */`
-  js注释
``` javascript
// 单行注释
/*
* 多行注释
*/
/**
* 函数说明
* @关键字
*
```
**常用注释关键字**
| 注释名 | 语法                       |  含义  |  示例  |
| :----| ---------------------------| ---- | ---- |
| @param  | @param 参数名 {参数类型} 描述信息 | 描述参数的信息 | @param name {String} 传入名称 |
| @return | @return {返回类型} 描述信息 | 描述返回值的信息 | @return {Boolean} true:可执行;false:不可执行 |
| @author | @author 作者信息 [附属信息：如邮箱、日期] | 描述此函数作者的信息 | @author 张三 2015/07/21 |
| @version| @version XX.XX.XX | 描述此函数的版本号 | @version 1.0.3 |
| @example| @example 示例代码 | @example setTitle(‘测试’) |  |

### 代码检查/格式化
>代码检查：对于 JavaScript，建议使用 `JSLint` 或 `JSHint`。
>格式化： 每个编辑器都有对应的格式化插件
### 模块化
审核设计图时，需要考虑结构样式的可复用性，可扩展性等
>- 结构相似度高的模块
- 同类模块可扩展性

---------

## HTML规范
### head标签初始化
PC端head 初始化
```
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="utf-8">
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="keywords" content="文档关键字">
  <meta name="description" content="文档描述">
  <meta name="robots" content="index,follow">
  <title>文档标题</title>
  <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
</head>
<body>
</body>
</html>
```
移动端head 初始化： [移动端常用head标签设置](http://www.css88.com/archives/5480)
```
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, minimal-ui">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="format-detection" content="telephone=no,email=no,address=no,date=no">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <!-- UC默认竖屏，UC强制全屏 -->
  <meta name="full-screen" content="yes">
  <meta name="browsermode" content="application">
  <!-- UC默认竖屏，UC强制全屏 -->
  <meta name="x5-orientation" content="portrait">
  <meta name="x5-fullscreen" content="true">
  <meta name="x5-page-mode" content="app">

  <meta name="robots" content="index,follow">
  <meta name="keywords" content="文档关键字">
  <meta name="description" content="文档描述">
  <title>文档标题</title>
  <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
</head>
<body>

</body>
</html>
```
> head 初始化可以加入到编辑器的`Snippet`（代码片段）中，设置快捷键，快速初始化；当然你也可以使用`Snippet`创建更多常用的代码片段；
> [更多关于Snippet点这里](http://www.jianshu.com/p/356bd7b2ea8e)
```
//sublime text 的 Snippet（代码片段）
<snippet>
	<content><![CDATA[
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="utf-8">
	<meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="keywords" content="${1:文档关键字}">
  <meta name="description" content="${2:文档描述}">
  <meta name="robots" content="index,follow">
	<title>${3:文档标题}</title>
	<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
	<link rel="stylesheet" href="http://cdnfile.op110.com.cn/lib/css/reset.css">
  <link rel="stylesheet" href="http://cdnfile.op110.com.cn/lib/css/short.css">
</head>
<body>
</body>
</html>
]]></content>
	<tabTrigger>pc_html5</tabTrigger>
    <description>PC html5 header头标签基础配置</description>
    <scope>text.html</scope>
</snippet>

```
### HTML中引入文件

根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 text/css 和 text/javascript 分别是它们的**默认值。
**引用外部资源cdn**
>不推荐：http://cdnfile.com/file.js 和 https://cdnfile.com/file.js；
 　推荐： //cdnfile.com/file.js

**引入css**
>所有css样式文件和内联样式全部写在`</head>`之前
```
// 引入外部css （推荐）
<link rel="stylesheet" href="style.css">
// 内联css （不推荐）
<style></style>
```
**引入js**
>所有css样式文件和内联样式全部写在`</body>`之前
```
// 引入外部js
<script src="base.js"></script>
```
### 兼容IE
**使用IE条件注释**
```
<!--[if IE 8]>
<p>您的浏览器版本过低，请升级！</p>
<![endif]-->
```
> 当浏览器版本过低不兼容时，应该不渲染该页面，而是提示并引导用户升级或使用推荐的浏览器

### html标签属性
>- a 标签显示的文本内容有可能过长时，应该添加 title;
- img 标签都需要添加 alt描述，纯装饰性的图片可用：alt="";
- img 添加onerror属性，当图片损毁时指向一个默认图片;
- 添加自定义属性时 data-*=""；例：`data-anchor="#header"`

### 标签语义化
>- 如不考虑低版本浏览器，减少div的使用，尽可能多的考虑html5语义化标签；
- 不使用已被弃用的html标签 例：`<b>`, `<u>`, `<center>`, `<font>`；
- img 添加onerror属性，当图片损毁时指向一个默认图片;
- 表单提交按钮使用 `button`标签，不使用`input[type=button]`; 链接跳转按钮使用 `a `标签

-------------------------

## CSS规范
### 选择器
- css中正常情况只出现 .class(类) 和 h1 标签，不要使用 #id；
- 尽量不使用'*'选择器；
- 建议选择器嵌套层级`≤4`；
- 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行；
```
/* not good */
.post, .page, .comment {
    line-height: 1.5;
}

/* good */
.post,
.page,
.comment {
    line-height: 1.5;
}
```
- 属性选择器中的值必须用双引号包围。
```
/* not good */
article[character='juliet'] {
    voice-family: "Vivien Leigh", victoria, female;
}

/* good */
article[character="juliet"] {
    voice-family: "Vivien Leigh", victoria, female;
}
```
### 属性
- 属性缩写
```
/* not good */
.post {
    font-family: arial, sans-serif;
    font-size: 12px;
    line-height: 1.5;
}

/* good */
.post {
    font: 12px/1.5 arial, sans-serif;
}
```
- 属性书写顺序，先结构属性，后表现属性
```
	/* 结构属性 */
	display: block;
	position: absolute;
	top: 50px;
	left: 0;
	overflow-x: hidden;
	width: 100px;
	height: 100px;
	padding: 5px;
	margin: 5px;
	border: 1px solid #ccc;

	/* 表现属性  */
	background: #f60;
	font: 12px/1.5 arial, sans-serif;;
	text-align: center;
	line-height: 2;
	color: #000;
```
- 长度为 0 时须省略单位。 (也只有长度单位可省)
- 尽量不使用 !important 声明
- url() 函数中的路径不加引号
```
body {
    background: url(bg.png);
}
```
### 使用css预处理器 sass, less
- [sass教程](https://www.sass.hk/)
- [less教程](http://lesscss.cn/)
### 使用postcss后处理器
- [PostCSS 是个什么鬼东西？](https://segmentfault.com/a/1190000003909268)
- [PostCSS教程](http://www.w3cplus.com/blog/tags/516.html)

----------

## JS规范
### 全局命名空间污染与 IIFE
```
(function($, w, d) {
	var a = 0;
	var b = 0;
}(jQuery, window, document));
```
### 严格模式
```
// 推荐
(function(){
  'use strict';

  // Your code starts here

}());

// 不推荐
'use strict';

(function(){
	// Your code starts here
}());
```
### 变量申明
- 每个 `var` 只能声明一个变量。
``` javascript
// 推荐
var　x = 0;
var y = 0;

// 不推荐
var x = 0,
	y = 0;
```
- 同一个作用域内，不要重复申明变量；
- 变量申明放在块级'{}'内的顶部位置；
- 变量申明都加上默认值;
```
// 推荐
var obj = null;

// 不推荐
var obj;
```
- 不要声明了变量却不使用；
- 不要在循环内部声明函数；
- 推荐使用 ES6 let,const 申明；
- 使用函数申明，不使用函数表达式
```
// 推荐
function foo() {
}

// 不推荐
var foo = function() {
}
```
### 分号
**以下几种情况后需加分号：**
- 变量声明
- 表达式
- return
- throw
- break
- continue
- do-while

### 括号
**下列关键字后必须有大括号**（即使代码块的内容只有一行）：
> `if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, `finally`, `with`

### 比较
- 使用 `===`、`!==`代替 `==`, `!=`
- 使用typeof
```
if (typeof x === 'undefined') {
	doSomething();
}
```
### 三元表达式
- 三元表达式只用于赋值；
- 简单的条件赋值，使用 三元表达式；
```
// 推荐
var x = y === 10 ? true : false;

// 不推荐
if (y === 10) {
	var x = true;
} else {
	var x = false;
}
```
### 模块化
> 搭建构建环境，使用 require 或 import 模块化加载 js
> [gulp](http://www.gulpjs.com.cn/)简单易上手
> [webpack2](http://www.css88.com/doc/webpack2/guides/development) 模块打包器，功能更强大，是众多流行框架的基础脚手架

----------

## 请求数据规范
### response JSON 数据
> 希望每一个项目均统一标准格式！

### 一般请求交互流程
1. （触发请求）点击按钮发送请求
2. （正在处理请求）禁用按钮，有时出现loading 元素
	> - 降低按钮透明度；
	 - 添加 disabled
	 - 更改按钮文字

3. （请求完成）处理响应结果

> `success` 成功
```
// 服务器异常
if (response.status === false) {
	alert(response.code + response.msg); // 返回错误代码和信息
	return false; // 直接返回，终止执行下面的代码
}
// 服务器返回预期结果为空时，应给出默认值或无值时的页面渲染
// 服务器返回预期结果时，正常执行操作
```
> `error` 失败
判断`xhr.status` 态码 并执行相关操作

　
 > `complete` 完成
	恢复禁用按钮

## 规范参考
- 书籍《编写可维护的javascript》
- [百度前端规范](https://github.com/ecomfe/spec)
- [腾讯前端规范](http://alloyteam.github.io/CodeGuide/)
- [Bootstrap代码规范](http://codeguide.bootcss.com/)
- [前端编码规范](http://www.css88.com/archives/5361)
- [前端开发规范：命名规范、HTML规范、CSS规范、JS规范](http://hao.jser.com/archive/16881/)
