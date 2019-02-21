### DatePicker （时间选择）
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```
 // 文件内直接使用
 <iv-datePicker />
```
### props 属性
| 属性  |  说明  | 类型  | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| * validate  |  验证值是否合法，需要return一个对象，status（提示状态），tipContent（提示的内容）	  | Function  |  /  |
| * validateShow  |  是否显示验证提示（全局，一般在保存时使用，会验证所有from组件）	  | object  |  { validateStatus: false }  |
|  readonly | 全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效  | Boolean  |  false  |
| value  |  当前已选项的数据，可使用 v-model 双向绑定  | Array  |  []  |
|  clearable | 是否显示清空按钮	  | Boolean  |  true  |
|  * required | 是否必填项（配合验证使用）	  | Boolean  |  false  |
|  * label | 左边label显示(为空时不渲染)	  | [String, Number]  |  ''  |
|  placeholder | 占位文本 (已多语言化)		  | [String, Number]  |  '请选择'  |
|  disabled | 是否禁用选择器	  | Boolean  |  false  |
|  multiple | 开启后，可以选择多个日期，仅在 date 下可用。	  | Boolean  |  false  |
|  show-week-numbers | 开启后，可以显示星期数。	  | Boolean  |  false  |
|  start-date | 设置默认显示的起始日期。	  | Date  |  /  |
|  confirm | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭	  | Boolean  |  false  |
|  open | 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用	  | Boolean  |  null  |
|  editable | 	文本框是否可以输入，只在没有使用 slot 时有效	  | Boolean  |  true  |
|  time-picker-options | 可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：:time-picker-options="{steps: [1, 10, 10]}"	  | Object  |  {}  |
|  options | 选择器额外配置，比如不可选日期与快捷选项，	  | Object  |  /  |
|  format | 展示的日期格式	  |  Date  |  /  |
|  placement | 日期选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end，2.12.0 版本开始支持自动识别	  |  string  |  bottom-start  |
|  type | 显示类型，可选值为 date、daterange、datetime、datetimerange、year、month	  | String  | date  |
|  split-panels | 开启后，左右面板不联动，仅在 daterange 和 datetimerange 下可用。	  | Boolean  |  false  |
|  transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果		  | Boolean  |  false  |
|  element-id | 给表单元素设置 id，详见 Form 用法。	  | string  |  /  |

### options 选择器额外配置详情看iview文档

### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| on-change | 日期发生变化时触发	  |  	返回两个值，已经格式化后的日期，比如 2016-01-01，和当前的日期类型，比如 date |
| on-open-change | 弹出日历和关闭日历时触发  |  true , false |
| on-ok | 在 confirm 模式下有效，点击确定按钮时触发  |  / |
| on-clear | 在 confirm 模式或 clearable = true 时有效，在清空日期时触发  |  / |

### slot
|   名称  | 说明  |
| ------------ | ------------ |
| slot  |  自定义选择器的显示内容，建议与 open 等参数一起使用  |
> ********