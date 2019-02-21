### tags （添加标签）
添加标签组件，如需在form表单内使用，需配合iv-space组件使用，详情看采购-酒店

### 使用方式 (已注册全局组件)
```
 // 文件内直接使用
 <iv-tags />
```
### props 属性
| 属性  |  说明  | 类型  | 默认值  |
| ------------ | ------------ | ------------ | ------------ |
| title  |  标题	  | string  |  -  |
| btnText  |  按钮标题	  | string  |  -  |
| value  |  已选中的数据源，可用v-model	  | Array  |  []  |
| allStore  |  数据源	  | Array  |  []  |
| width  |  弹出框宽度	  | Number  |  250  |
| max  |  最多选择几项	  | Number  |  5  |
