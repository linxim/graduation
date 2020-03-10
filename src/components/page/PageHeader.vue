<template>
  <div class="pageheader">
    <el-menu
      default-active="activeIndex2"
      class="el-menu-demo el-menu-demo-underline"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="0" style="left:0;position:absolute;">{{welcome}}</el-menu-item>
      <el-menu-item index="1">
        <router-link to="/login">商户后台</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/register">商户注册</router-link>
      </el-menu-item>

      <el-menu-item index="3" disabled>购物车</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me">订单管理</a>
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
    <div class="block">
      <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
      <el-carousel style="height:340px;border-radius:10px;width:100%;">
        <el-carousel-item v-for="item in imgs" :key="item.key">
          <!-- <h3>{{ item }}</h3> -->
          <img :src="item.img" alt class="pictuer" style="width:100%;height:100%;" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <template>
      <div>
        <el-row>
          <el-col :span="8">
            <div class="grid-content fea-text" > <router-link to="/cart" style="text-decoration:none;"> <span style="color:white;">一键购物方式  </span> </router-link> </div>
         
          </el-col>
          <el-col :span="8">
            <div class="grid-content fea-text">商品价格对比购买</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content fea-text">海量新鲜商品供应</div>
          </el-col>
        </el-row>
      </div>
    </template>
  </div>
</template>
   
  
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      welcome: "欢迎来到这个网页，我们将为您提供全方位服务",
      imgs: [
        {
          img: "../../../static/img/rests_img/header_title1.jpg"
        },
        {
          img: "../../../static/img/rests_img/header_title2.jpg"
        },
        {
          img: "../../../static/img/rests_img/header_title3.jpg"
        }
      ],
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      
    

    };
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
    setInterval(() => {
      var start = this.welcome.substring(0, 1);
      // 获取到第一个字符
      var end = this.welcome.substring(1);
      this.welcome = end + start;
    }, 400);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
};
</script>
<style scoped>
.pageheader > ul > li {
  float: right;
}
.el-menu-demo-underline > .el-menu-item:hover {
  border-bottom-color: #eef1f6 !important;
  color: #41ef1d;
}
.fea-text {
  background-color: #81d742;
  font-size: 25px;
  margin: 5px;
}
</style>