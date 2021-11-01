<template>
  <el-row>
    <el-col><div class="grid-content bg-purple">Hello</div></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
/* .el-row {
  margin-bottom: 20px;
} */
/* .el-col {
  border-radius: 4px;
} */

.bg-purple {
  background: #092f61;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>