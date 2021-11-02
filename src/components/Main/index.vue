<template>
  <el-container>
    <el-aside><Navigation></Navigation></el-aside>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./Header.vue";
import Navigation from "./Navigation.vue";
export default {
  name: "Home",
  components: {
    Header,
    Navigation,
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
/* 
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>
