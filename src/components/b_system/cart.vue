<template>
  <div id="shopcart">
    <div class="head_bg">
      <div class="logo">
        <div class="logo_size">
          <img src="../../../static/img/shopcart_img/logo.png" alt />
        </div>
      </div>
      <ul class="head_nav">
        <li>
          <router-link to="/">
            <span style="color:white">首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/nav_cart">
          <span style="color:white">购物车</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="centerShop">
      <div class="panel panel-success">
        <!-- 头部 -->
        <!-- <div class="panel-heading">
          <h1>查询购物车数量及金额变化</h1>
        </div>-->
        <!-- 头部 -->
        <div class="panel-body">
          <div class="input-group">
            <span class="input-group-btn">
              <a class="btn btn-success">名称搜索</a>
            </span>
            <input type="text" class="form-control" placeholder="请输入查询内容" v-model="searchValue" />
          </div>
        </div>
        <div class="panel-body">
          <table class="table table-condensed">
            <thead>
              <tr>
            
                <th>图片</th>
                <th>商品名称</th>
                <th>商品数量</th>
                <th>商品单价(元)</th>
                <th>商品全部(元)</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in searchFor" :key="index" class="cart_body">
                <!-- <td>
                  <el-checkbox
                    v-model="item.ischecked"
                    @change="handleCheckedNameChange"
                  >{{item.id}}</el-checkbox>
                </td> -->

                <td>
                  <img :src="item.img" :alt="item.name" style="width:98px;height:100px" />
                </td>
                <td>{{item.name}} <p  class="cart_mess"> {{item.message}} </p> </td>
                <td>
                  <el-button
                    @click="minus(item.num -=1)"
                    :disabled="item.num===0"
                    class="btn-add"
                    circle
                  >-</el-button>
                  {{item.num}}
                      <el-button
                   @click="add(item.num +=1)"
                    class="btn-add"
                    circle
                  >+</el-button>
                
                </td>
                <td>{{item.univalence | numFilter(2)}}</td>
                <td>{{item.num*item.univalence | numFilter(1)}}</td>
                <td>
                  <button type="button" class="btn btn-success btn-sm" @click="addCart(item.id)" >加入购物车</button>
                </td>
              </tr>

              <!-- <tr>
                <td colspan="6">{{totalCount}} 件商品总计(不含运费):{{totalPrice | numFilter(2)}}</td>
              </tr> -->
              <!-- <tr>
                <el-dialog title="收货地址" :visible.sync="onestop" width="1000px">
                  <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="100"></el-table-column>
                    <el-table-column property="name" label="姓名" width="100"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                    <el-table-column property="addgoods" label="添加商品" width="100">
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          下拉菜单
                          <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>123123</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-table-column>
                    <el-table-column property="buygoods" label="购买商品">
                      <el-button type="text" @click="open">购买</el-button>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      searchValue: "",
      onestop: false,
   
     
      gridData: [
        {
          date: "2020-3-8",
          name: "林夕",
          address: "重庆市三峡学院"
        }
      ]
    };
  },
  filters: {
    numFilter: function(data, n) {
   
      return "$" + data.toFixed(n);
    }
  },
  computed: {
    searchFor: function() {
      if (!this.searchValue) {
        return this.tableData;
      }
      return this.tableData.filter((v, i) => {
        if (v.name.indexOf(this.searchValue) !== -1) {
          return v;
        }
      });
    },
    totalCount: function() {
      var n = 0;
      this.tableData.forEach(function(v, i) {
        n += v.num;
      });
      return n;
    },

  },
  methods: {
    add: function(i) {
      console.log(i);
      i++;
    },
    minus: function(i) {
      i--;
    },
    // 请求接口获取ischecked的数据并转换为boolean
    getCart() {
      const self = this;
      this.$http.get("/api/user/getCart").then(response => {
        self.tableData = response.data;
        self.tableData[0].ischecked = JSON.parse(self.tableData[0].ischecked);
      });
    },
    open() {
      this.$confirm("确定是否购买", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "购买成功!"
          });
          this.$router.push({ path: "/" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    addCart(i,data) {
				const self = this;			
        console.log(Object.assign({},self.tableData[i]))
        event.path[0].disabled=true
          this.$http.post('/api/user/addNav_cart',Object.assign({},self.tableData[i-1]))
          .then(response =>{
            // console.log(response);
            
          }).then(function(error) {
            // console.log(error);
          }),function(error){

          
        }
        self.tableData[i].ischecked=true;
        	},
  },
  mounted() {
    this.getCart();
  }
};
</script>
<style scoped>
@import url("./cart.scss");
</style>