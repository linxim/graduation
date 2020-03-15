<template>
  <div>
 <div id="show-blogs" v-theme:column="'narrow'">
    <h1 v-rainbow>商品总览</h1>
    
    <div v-for="list in datas" class="single-blog">
      <h2>{{list.title}}</h2>
      <div style="width:50%;height:100px;">
      <img :src="list.img" alt="" style="width:50%;height:100%;">
      </div>
      <article>{{list.body}}</article>
      <em>特价：***</em>
      <button>购买</button>
    </div>
  </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            datas:[]
        }
    },
    methods: {
      getConbuy(){
        const self = this;
      this.$http.get("/api/user/conBuy").then(response => {
        self.datas = response.data;
      });
      }
    },
     mounted() {
    this.getConbuy();
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color="#"+Math.random().toString(16).slice(2,8);
      }
    }
  }
};
</script>
<style scoped>
@import url('./con_buy.scss');
</style>