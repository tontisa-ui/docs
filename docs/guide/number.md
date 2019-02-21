### number （数字输入框）
表单input组件
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```
 // 文件内直接使用
 <iv-input />
```
### props 属性
| 属性  |  说明  | 类型  | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| * validate  |  验证值是否合法，需要return一个对象，status（提示状态），tipContent（提示的内容）	  | Function  |  /  |
| * validateShow  |  是否显示验证提示（全局，一般在保存时使用，会验证所有from组件）	  | object  |  { validateStatus: false }  |
| value  |  绑定的值，可使用 v-model 双向绑定  | Number, String  |  ''  |
| * isReadOnly  |  是否只读（预览模式专用）  | Boolean  |  false  |
|  * label | 左边label显示(为空时不渲染)	  | [String, Number]  |  ''  |
|  * required | 是否必填项（配合验证使用）	  | Boolean  |  false  |
|  readonly | 设置输入框为只读  | Boolean  |  false  |
|  min | 最小值  | Number  |  -  |
|  max | 最大值 | Number  |  -  |
|  precision | 数值精度	  | Number  |  -  |
|  signKey | 设置币种符号  | string  |  false  |
|  active-change | 是否实时响应数据，设置为 false 时，只会在失焦时更改数据  | Boolean  |  true  |
|  clearable | 是否显示清空按钮	  | Boolean  |  true  |
|  placeholder | 占位文本 (已多语言化)		  | [String, Number]  |  '请输入'  |
|  maxlength | 最大输入长度		  | Number  |  -  |
|  editable | 是否可编辑	  | Boolean  |  true  |

### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| on-blur | 输入框失去焦点时触发  |  - | 
| on-change | 数据改变时触发  |  value |
| on-focus | 输入框失去焦点时触发  | - |
