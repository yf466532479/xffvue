<template>
  <el-container>
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="pwd"></el-input>
      </el-form-item>
      <el-form-item label="登录">
        <el-button type="primary" @click="dl()">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      pwd: ""
    };
  },
  methods: {
    dl: function() {
      if (this.name != undefined && this.pwd != undefined) {
        this.$router.push("/home");
      }
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>