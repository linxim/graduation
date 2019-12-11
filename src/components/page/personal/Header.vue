<template>
  <div class="z_header">
    <!-- <div class="logo">  </div> -->
    <div class="logo">
      <router-link to="/index"><i class="web-font">忆家客栈</i></router-link>
    </div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user-logo" src="../../../static/img/img.jpg" />
          {{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "linxi"
    };
  },
  computed: {
    username() {
      let username = sessionStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    handleCommand(command) {
      if (command == "loginout") {
        sessionStorage.removeItem("ms_username");
        sessionStorage.removeItem("ms_userId");
        this.$router.push("/index");
        sessionStorage.removeItem("ms_show");
      } else if (command == "userCenter") {
        this.$router.push("/userCenter");
      }
    }
  }
};
</script>

<style scoped>

.z_header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
  background-size: 100% 70px;
}
/* .header .logo {
  background: url("../../../static/img/logo.jpg") no-repeat;
  background-size: 250px 70px;
  width: 250px;
  height: 70px;
  opacity: 0.6;
  position: relative;
} */
.logo{
    position: relative;
    left: 20px;
}
.user-info {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 50px;
  font-size: 16px;

  z-index: 999;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #36eca0;
  font-size: 19px;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
.web-font {
  color: black;
  font-family: "webfont" !important;
  font-size: 28px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "webfont";
  font-display: swap;
  src: url("../../../static/font/webfont.eot"); /* IE9 */
  src: url("../../../static/font/webfont.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../../static/font/webfont.woff2") format("woff2"),
    url("../../../static/font/webfont.woff") format("woff"),
    /* chrome、firefox */ url("../../../static/font/webfont.ttf")
      format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("../../../static/font/webfont.svg#webfont") format("svg"); /* iOS 4.1- */
}
</style>
