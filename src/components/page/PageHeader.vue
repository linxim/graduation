<template>
  <div class="pageheader">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/login">登录</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/register">注册</router-link>
      </el-menu-item>

      <el-menu-item index="3" disabled>购物车</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
    <div class="block">
      <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
      <el-carousel height="400px">
        <el-carousel-item v-for="item in imgs" :key="item.key">
          <!-- <h3>{{ item }}</h3> -->
          <img :src="item.img" alt class="pictuer" style="width:100%;height:100%;" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <template>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </template>
  </div>
</template>
   
  
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
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
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
    };
  },
  mounted(){
     this.list = this.states.map(item => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
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
</style>