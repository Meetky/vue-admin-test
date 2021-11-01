<template>
  <el-row :gutter="24">
    <el-col :span="4"><div class="grid-content bg-purple">Hello</div></el-col>
    <el-col :span="20"><div class="grid-content bg-purple">Tom</div></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>