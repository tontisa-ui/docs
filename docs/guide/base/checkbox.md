### checkbox（多选）
`* 代表自定义属性， 其它为iview属性或相似属性`

### 使用方式 (已注册全局组件)
```
 // 文件内直接使用
 <iv-checkbox />
```
### props 属性
| 属性  |  说明  | 类型  | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| * validate  |  验证值是否合法，需要return一个对象，status（提示状态），tipContent（提示的内容）	  | Function  |  /  |
| * validateShow  |  是否显示验证提示（全局，一般在保存时使用，会验证所有from组件）	  | object  |  { validateStatus: false }  |
| value  |  绑定的值，可使用 v-model 双向绑定  | Number, String  |  ''  |
| * labelKey  |  指定当前选项的 value 值，组合会自动判断是否选中  | [String, Number]  |  label  |
|  * data | 需要展示的数据源	  | Array  |  []  |
|  true-value |选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用  | [Boolean, Number, String]  |  true  |
|  false-value | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用  | [Boolean, Number, String]  |  false  |

ps： `disabled 属性需要在数据源中设置，默认false`

### event 事件
| 属性  |  说明  | 返回值  |
| ------------ | ------------ | ------------ |
| * on-on-checkbox-change | 在点击选项时触发  |  value | 
| on-change | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发  |  value |
