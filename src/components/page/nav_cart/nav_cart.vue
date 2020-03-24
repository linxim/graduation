<template>
  <div>
    <div>
      <div>购物车</div>
      <div>全部商品</div>
      <div class="panel-body">
        <table class="table table-condensed">
          <thead>
            <th>
              <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            </th>
            <tr>
              <!-- 头部标题信息 -->
              <th></th>
              <th>商品信息</th>
              <th></th>
              <th>数量</th>
              <th>单价</th>
              <th>金额</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in searchFor" :key="index">
              <td style="width:20px;">
                <el-checkbox v-model="item.ischecked" @change="handleCheckedNameChange">{{item.id}}</el-checkbox>
              </td>

              <td>
                <img :src="item.img" style="width:100px;height:100px;" />
              </td>
              <td>{{item.message}}</td>
              <td>{{item.num}}</td>
              <td>{{item.unit_price | numFilter(2)}}</td>
              <td>{{item.num*item.unit_price | numFilter(1)}}</td>
              <td>
                <button type="button" class="btn btn-success btn-sm" @click="delCart(item.id)">删除</button>
              </td>
            </tr>
            <tr>
              <td colspan="6">{{totalCount}} 件商品总计(不含运费):{{totalPrice | numFilter(2)}}</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <el-button type="danger" @click="dialogVisible=true">结算</el-button>
                <el-dialog
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose"
                >
                  <p>支付：{{totalPrice | numFilter(2)}}</p>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="pay()">确 定</el-button>
                  </span>
                </el-dialog>
              </td>
            </tr>
          </tbody>
        </table>
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
      checkAll: false,
      dialogVisible: false
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
    totalPrice: function() {
      var n = 0;
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].ischecked == true) {
          n += this.tableData[i].num * this.tableData[i].unit_price;
        }
      }

      return n;
    }
  },
  methods: {
    getCart() {
      const self = this;
      this.$http.get("/api/user/getNav_cart").then(response => {
        self.tableData = response.data;
        // console.log(self.tableData[0].ischecked);
        // self.tableData[0].ischecked = JSON.parse(self.tableData[0].ischecked);
        // console.log(typeof self.tableData[0].ischecked);
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
    handleCheckAllChange(val) {
      if (this.checkAll) {
        this.checkAll = true;
        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[i].ischecked = true;
        }
      } else {
        this.checkAll = false;
        for (i = 0; i < this.tableData.length; i++) {
          this.tableData[i].ischecked = false;
        }
      }
    },
    handleCheckedNameChange(value) {
      if (this.tableData.ischecked == true) {
        this.tableData.ischecked = false;
      } else {
        this.tableData.ischecked = true;
      }
      // let checkedCount = value.length;
      // this.checkAll = checkedCount === this.tableData.length;
      // console.log(this.checkAll);
      // this.isIndeterminate =
      //   checkedCount > 0 && checkedCount < this.tableData.length;
      // console.log(this.isIndeterminate);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 删除数据
    delCart(id) {
      var self = this;
      console.log(id);
      this.$http.post("/api/user/delNav_cart", { id: id });
      this.getCart();
    },
    //支付
    pay(){
      this.$notify({
          title: '成功',
          message: '祝您购物愉快',
          type: 'success'
        });
        this.dialogVisible = false;
        // 更新
        // this.$http.post("/api/user/delNav_cart_success", { id: id });
        // this.getCart();
    }
  },
  mounted() {
    this.getCart();
  }
};
</script>
<style >
@import url("../../page/nav_cart/nav_cat.scss");
</style>