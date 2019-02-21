### select （下拉选择）
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```
 // 文件内直接使用
 <iv-select />
```
### props 属性
| 属性  |  说明  | 类型  | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| * validate  |  验证值是否合法，需要return一个对象，status（提示状态），tipContent（提示的内容）	  | Function  |  /  |
| * validateShow  |  是否显示验证提示（全局，一般在保存时使用，会验证所有from组件）	  | object  |  { validateStatus: false }  |
| not-found-text  |  自动获取焦点	  | Boolean  |  false  |
| multiple  |  是否支持多选		  | Boolean  |  false  |
| valKey  |  指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array	  | String, Number, Array  |  ''  |
| * labelKey  |  设置显示的label选项	  | string  |  ''  |
| * subkey  |  类似v-model，指定第二个字段，选择时会改变(需在外层加.sync) 	  | string  |  ''  |
| filterable  |  是否支持搜索	  | Boolean  |  false  |
| element-id  |  给表单元素设置 id，详见 Form 用法。	  | String  |  -  |
| * data  |  下拉数据源	  | String, Array  |  -  |
| remote  |  是否使用远程搜索	  | Boolean  |  false  |
| label-in-value  |  在返回选项时，是否将 label 和 value 一并返回，默认只返回 value	  | Boolean  |  false  |
| placement  |  弹窗的展开方向，可选值为 top、bottom、top-start、bottom-start、top-end、bottom-end	  | String  |  'bottom-start'  |
| transfer  |  是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果	  | Boolean  |  true  |
| loading-text  |  远程搜索中的文字提示	  | string  |  加载中  |
| remote-method  |  远程搜索的方法	  | Function  |  -  |
| loading  |  当前是否正在远程搜索	  | Boolean  |  false  |
| value  |  	指定选中项目的 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array  | String, Number, Array  |  ''  |
| * isReadOnly  |  是否只读（预览模式专用）  | Boolean  |  false  |
|  * label | 左边label显示(为空时不渲染)	  | [String, Number]  |  ''  |
|  * required | 是否必填项（配合验证使用）	  | Boolean  |  false  |
|  * name | 设置input的name值	  | String  |  /  |
|  readonly | 设置输入框为只读  | Boolean  |  false  |
|  clearable | 是否显示清空按钮	  | Boolean  |  true  |
|  placeholder | 占位文本		  | [String, Number]  |  '请输入'  |

### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| on-query-change  |  搜索词改变时触发  | 当前选中项  |
| on-clear | 点击清空按钮时触发  |  - |
| on-change | 点击下拉选项时触发  |  value |
| on-open-change | 下拉框展开或收起时触发  |  true / false |


### Option 以及 OptionGroup  请看iview文档