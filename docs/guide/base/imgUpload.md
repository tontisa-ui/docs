### imgUpload（图片上传）
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```js
 // 文件内直接使用
 <iv-imgUpload />
```
### props 属性 （待完善）
| 属性  |  说明  | 类型  |  默认值  |
| ------------ | ------------ | ------------  ------------ |
| max-size  |  文件大小限制，单位 kb	  | Number  |  -  |
| type           | 上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）   |string        | select |
| accept         | 上传的<a style='color:#ff9800' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept'>文件类型</a>  | string|  - |
| maxSize        | 允许上传的文件大小单位 kb                    | Number        | -     |
| action         | 必填，上传文件路径                           | string       | -     |
| * value          | 默认已上传的文件列表,可用v-model              | Array        | []    |
| format         | 允许上传的文件后缀                           | Array     | []    |
| multiple       | 是否多选                                    | boolean       | false  |
| headers        | 设置上传的请求头部                           | string         | - |
| with-credentials| 支持发送 cookie 凭证信息                     | boolean     | false  |
| name           | 上传的文件字段名                             | string      | file  |
| before-select  | 选择上传的文件时触发，返回字段为file， fileList     | string        | file  |
| before-upload  |  上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传	  | Function  |  false  |
| on-progress  |  文件上传时的钩子，返回字段为 event, file, fileList	  | Function |  false  |
| on-success  |  文件上传成功时的钩子，返回字段为 response, file, fileList	  | Function  |  false  |
| on-error  |  文件上传失败时的钩子，返回字段为 error, file, fileList	  | Function  |  false  |
| on-remove  |  文件列表移除文件时的钩子，返回字段为 file, fileList	  | Function  | false  |
| on-format-error  |  文件格式验证失败时的钩子，返回字段为 file, fileList	  | Function |  false  |
| on-exceeded-size  |  文件超出指定大小限制时的钩子，返回字段为 maxSize, file, fileList	  | Function | false  |
```js
默认已上传可以用v-model， 格式如下：
[
    {
        name: 'img1.jpg',
        url: 'http://www.xxx.com/img1.jpg'
    },
    {
        name: 'img2.jpg',
        url: 'http://www.xxx.com/img2.jpg'
    }
]
```
#### 组件内的错误提示都在组件内完成了，无需在引用组件时写方法, 并已处理多语言

### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| * handle-view    | 点击预览时触发，返回字段为index,file         | string         |
| * img-load-status  | 图片上传的状态，返回布尔值     | file  |

### slot 插槽
| 属性  |  说明  |
| ------------ | ------------ |
| 无  |  触发上传组件的控件  |
