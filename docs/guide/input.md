### input （文本输入框）
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```js
 // 文件内直接使用
 <iv-input />
```
### props 属性
| 属性  |  说明  | 类型  | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| * validate  |  验证值是否合法，需要return一个对象，status（提示状态），tipContent（提示的内容）	  | Function  |  /  |
| * validateShow  |  是否显示验证提示（全局，一般在保存时使用，会验证所有from组件）	  | object  |  { validateStatus: false }  |
| autofocus  |  自动获取焦点	  | Boolean  |  false  |
| value  |  绑定的值，可使用 v-model 双向绑定  | Number, String  |  ''  |
| * isReadOnly  |  是否只读（预览模式专用）  | Boolean  |  false  |
|  * label | 左边label显示(为空时不渲染)	  | [String, Number]  |  ''  |
|  * required | 是否必填项（配合验证使用）	  | Boolean  |  false  |
|  * name | 设置input的`name`值	  | String  |  /  |
|  rows | 文本域默认行数，仅在 textarea 类型下有效  | [Boolean, Number]  |  true  |
|  readonly | 设置输入框为只读  | Boolean  |  false  |
|  clearable | 是否显示清空按钮	  | Boolean  |  true  |
|  type | 输入框类型，可选值为 `text`、`password`、`textarea`、`url`、`email`、`date`	  | String  |  text  |
|  name | 是否显示清空按钮	  | Boolean  |  true  |
|  placeholder | 占位文本 (已多语言化)		  | [String, Number]  |  '请输入'  |
|  maxlength | 最大输入长度		  | Number  |  /  |
|  autosize | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }	  | Boolean,Object  |  false  |

### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| on-enter  |  按下回车键时触发  | value,event  |
| on-blur | 输入框失去焦点时触发  |  value,event | 
| on-change | 数据改变时触发  |  value,event |
| on-keyup | 原生的 keyup 事件  |  value,event |
| on-keydown | 原生的 keydown 事件  |  value,event |
| on-keypress | 原生的 keypress 事件  |  value,event |
| on-focus | 输入框获得焦点时触发  |  value,event |
| * emptyVal | 当value为空时返回  |  无 |


### slot 插槽
| 属性  |  说明  |
| ------------ | ------------ |
| prepend  |  前置内容  |
| append |  后置内容 |