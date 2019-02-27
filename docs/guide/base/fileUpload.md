### fileUpload（文件上传）
表单iv-fileUpload组件
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```
 // 文件内直接使用
 <iv-fileUpload />
```
### props 属性 （待完善）
| 属性  |  说明  | 类型  |  默认值  |
| ------------ | ------------ | ------------ | ------------ |
| max-size  |  文件大小限制，单位 kb	  | Number  |  -  |
| type           | 上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）   |string        | select |
| accept         | 上传的<a style='color:#ff9800' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept'>文件类型</a>  | string|  - |
| maxSize        | 允许上传的文件大小单位 kb                    | Number        | 20 * 1024     |
| action         | 必填，上传文件路径                           | string       | -     |
| * value          | 默认已上传的文件列表,可用v-model              | Array,object        | []    |
| * isAction         | 是否显示操作列表                           | Boolean     | true    |
| * isForm         | 是否在form里使用                           | Boolean     |   false    |
| * uploadTxt         | 上传之前文字描述                           | String     |  点击选择文件上传    |
| * keyValue         |  key值，主要在table中使用                  | string     | ''    |
| * index         |  当前第几行值，主要在table中使用                  | number     | 0    |
| format         | 允许上传的文件后缀                 | Array     | ['txt', 'doc', 'docx', 'png', 'pdf', 'jpg', 'xlsx']    |
| multiple       | 是否多选                                    | boolean       | false  |
| headers        | 设置上传的请求头部                           | string         | - |
| with-credentials| 支持发送 cookie 凭证信息                     | boolean     | false  |
| name           | 上传的文件字段名                             | string      | file  |
| label           | 左边label显示(为空时不渲染)                   | string      | ''  |
| before-upload  |  上传文件之前的钩子，参数为上传的文件,返回字段为file， fileList	  | Function  |  -  |
| on-progress  |  文件上传时的钩子，返回字段为 file, fileList	  | Function |  -  |
| on-success  |  文件上传成功时的钩子，返回字段为 response, file, fileList	  | Function  |  -  |
| on-error  |  文件上传失败时的钩子，返回字段为 error, file, fileList	  | Function  |  -  |
| on-format-error  |  文件格式验证失败时的钩子，返回字段为 formatData, file, fileList, key, index	  | Function |  -  |
| on-exceeded-size  |  文件超出指定大小限制时的钩子，返回字段为 maxSize, file, fileList, key, index	  | Function | -  |
```js
默认已上传可以用v-model， 格式如下：
[
    {
        name: 'img1.jpg',
        url: 'http://www.xxx.com/img1.jpg'
    }
]
```
#### 组件内的错误提示都在组件内完成了，无需在引用组件时写方法, 并已处理多语言

### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| * on-remove  |  文件列表移除文件时的钩子，返回字段为 file, fileList	  | string  |
| * downFileErr  |  下载失败时触发	  | -  |

### slot 插槽
| 属性  |  说明  |
| ------------ | ------------ |
| 无  |  触发上传组件的控件  |
