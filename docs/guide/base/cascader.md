### cascader (级联)
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```js
 // 文件内直接使用
 <iv-cascader />
```
### props 属性
| 属性  |  说明  | 类型  | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| * validate  |  验证值是否合法，需要return一个对象，status（提示状态），tipContent（提示的内容）	  | Function  |  /  |
| * validateShow  |  是否显示验证提示（全局，一般在保存时使用，会验证所有from组件）	  | object  |  { validateStatus: false }  |
| value  |  当前已选项的数据，可使用 v-model 双向绑定  | Array  |  []  |
|  clearable | 是否显示清空按钮	  | Boolean  |  true  |
|  * required | 是否必填项（配合验证使用）	  | Boolean  |  false  |
|  * label | 左边label显示(为空时不渲染)	  | [String, Number]  |  ''  |
|  placeholder | 占位文本 (已多语言化)		  | [String, Number]  |  '请选择'  |
|  disabled | 是否禁用选择器	  | Boolean  |  false  |
|  load-data | 动态获取数据，数据源需标识 loading	  | Function  |  /  |
|  trigger | 次级菜单展开方式，可选值为 click 或 hover	  | String  |  click  |
|  change-on-select | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例		  | Boolean  |  false  |
|  data | 可选项的数据源	  | Array  |  []  |
|  filterable | 是否支持搜索	  | Boolean  |  true  |
|  transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果		  | Boolean  |  false  |
|  element-id | 给表单元素设置 id，详见 Form 用法。	  | string  |  /  |


### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| on-visible-change | 展开和关闭弹窗时触发  |  Boolean | 
| on-change | 选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据  |  value,selectedData |
