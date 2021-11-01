<template>
  <div class="loginPage">
    <el-card class="box-card">
      <h3>登录页面</h3>
      <el-form label-width="60px">
        <el-form-item label="用户名">
          <template
            ><i class="el-icon-edit"></i><el-input v-model="username"></el-input
          ></template>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "http://127.0.0.1:8080/backend/user/login/",
          JSON.stringify({ username: this.username, password: this.password })
        )
        .then(
          (response) => {
            console.log(this.$router);
            console.log(response.data);
            if (
              response.data["message"] === "success" &&
              response.data["code"] === 200
            ) {
              this.$router.push({ path: "/home" });
            } else {
              alert("登录失败");
            }
          },
          (error) => {
            console.log("请求失败", error.message);
          }
        );
    },
  },
};
</script>

<style lang="scss">
/* .text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
} */
.loginPage {
  min-height: 100%;
  text-align: center;

  .box-card {
    width: 480px;
    margin: 0 auto;
    margin-top: 230px;
  }
  .btn {
    margin-right: 46px;
  }
}
</style>