<template>
  <el-row>
    <el-col>
      <div class="grid-content bg-purple">
        <el-select v-model="value" placeholder="">
          <el-option placeholder="退出"> </el-option>
        </el-select>
      </div>
    </el-col>
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
}
.el-col {
  border-radius: 4px;
} */

.bg-purple {
  background: #b3c0d1;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>