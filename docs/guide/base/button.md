---
title: Button按钮
categories: article
---

# Button

::: tip Button按钮提示
按钮组件，提供了通栏和非通栏两种大小，可自定义样式
:::


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js
<import name='quist-button' src='@quist-ui/quist-button/index'></import>
```

## 例子

#### 不同颜色

```js
<quist-button type="primary" value="Primary"></quist-button>

<quist-button type="default" value="default"></quist-button>

<quist-button type="danger" value="Danger"></quist-button>
```

#### 禁用按钮

```js{4}
<quist-button disabled value="Disabled"></quist-button>
```

#### 通栏按钮

```js{4}
<quist-button type="default" block></quist-button>
```

#### 绑定 click 事件

```js{4}
<quist-button type="default" block @on-click="onClick"></quist-button>
```

#### 自定义样式按钮

```js
<quist-button
  value="自定义样式按钮"
  bg-color="#fac450"
  f-color="#ffffff"
  f-size="{{42}}"
  width="{{400}}"
  height="{{120}}"
  border-radius="{{0}}"
  border-color="#E64340">
</quist-button>
```

更详细代码可以参考 [quist-button demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Button/index.ux)

<Common-api title="API" :column="[
  {key: 'attr', label: '属性' },
  {key: 'desc', label: '说明' },
  {key: 'type', label: '类型' },
  {key: 'default', label: '默认值' },
]" :data="[
  {attr: 'value', desc: '按钮的文字', type: 'String', default: '确定'},
  {attr: 'border-color', desc: '按钮的边框颜色', type: 'String', default: '#dddddd'},
  {attr: 'border-radius', desc: '按钮的圆角大小', type: 'Number', default: 5},
  {attr: 'bg-color', desc: '按钮的背景色', type: 'String', default: '#ffffff'},
  {attr: 'width', desc: '按钮的宽度', type: 'Number', default: 288},
  {attr: 'height', desc: '按钮的高度', type: 'Number', default: 92},
  {attr: 'f-size', desc: '按钮文字的大小', type: 'Number', default: 32},
  {attr: 'f-color', desc: '按钮文字的颜色', type: 'String', default: '#999999'},
  {attr: 'type', desc: '设置按钮类型', type: 'default | danger | String', default: '-'},
  {attr: 'block', desc: '将按钮宽度调整为其父宽度的选项', type: 'Boolean', default: 'false'},
  {attr: 'disabled', desc: '是否禁用', type: 'Boolean', default: 'false'},
  {attr: 'on-click', desc: 'click事件的handler', type: 'Function', default: '-'}
]"></Common-api>

## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本

#### v1.0.8（2018-11-01）
* [优化] 可自定义按钮的大小、颜色、边框、圆角及按钮文字大小、颜色

#### v1.1.1（2018-12-03）
* [优化] 修改默认样式