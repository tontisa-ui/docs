<template>
<div class="api-wrap">
  <h3>{{title}}</h3>
  <el-table
    :data="data"
    stripe
    size="small"
    style="width: 100%">
    <el-table-column
      v-for="item in column"
      :prop="item.key"
      :label="item.label"
      :width="item.width">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'api',
  props: {
    type: {
      type: String,
      default: 'attr'
    },
    column: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: '属性'
    }
  }
}
</script>

<style lang="less">
.el-table__header, .el-table__body{
  margin: 0 !important;
}
.el-table{
  td, th{
    border-right: none;
    border-bottom: none;
  }
  th {
    font-size: 16px;
    font-weight: bold;
    color: #404040;
  }
  th.is-leaf{
    border-bottom: none;
  }
  border-right: 1px solid #ebeef5;
}
</style>
