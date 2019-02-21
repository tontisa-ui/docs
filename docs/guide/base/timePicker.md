### timePicker （时间选择）
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```
 // 文件内直接使用
 <iv-timePicker />
```
### props 属性
| 属性  |  说明  | 类型  | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| steps      |  下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。	  | Array  |  []  |
| placement  |  时间选择器出现的位置，可选值为top, top-start ,top-end ,bottom, bottom-start, bottom-end, left, left-start, left-end,right, right-start, right-end，2.12.0 版本开始支持自动识别	  | String  |  bottom-start  |
| confirm   |  是否显示底部控制栏	  | Boolean  |  false  |
| open      |  手动控制时间选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用	  | Boolean  |  null  |
| disabled  |  是否禁用选择器	  | Boolean  |  false  |
| editable  |  文本框是否可以输入，只在没有使用 slot 时有效	  | Boolean  |  true  |
| transfer  |  是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果	  | Boolean  |  false  |
| element-id  |  给表单元素设置 id，详见 Form 用法。	  | String  |  -  |
| format  |  展示的时间格式  | Date  |  HH:mm  |
|  * label | 左边label显示(为空时不渲染)	  | [String, Number]  |  ''  |
|  * required | 是否必填项（配合验证使用）	  | Boolean  |  false  |
|  clearable | 是否显示清空按钮	  | Boolean  |  true  |
|  placeholder | 是否显示清空按钮	  | Boolean  |  true  |
|  type | 输入框类型，可选值为 text、password、textarea、url、email、date	  | String  |  text  |

### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| on-ok  |  点击确定按钮时触发  | -  |
| on-clear | 	在清空日期时触发  |  - |
| on-change | 时间发生变化时触发  |  已经格式化后的时间，比如 09:41 |
| on-open-change | 弹出浮层和关闭浮层时触发  |  true / false |

### slot 插槽
| 属性  |  说明  |
| ------------ | ------------ |
| 无 |  自定义选择器的显示内容 |