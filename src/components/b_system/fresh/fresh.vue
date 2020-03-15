<template>
    <div>
        <div class="fresh">
            <div class="fresh-body">
                <img src="../../../../static/img/fresh_img/head.jpg" alt="" style="width:100%;height:300px;">
                <div class="wrap-good">
                    <ul v-for="list in data_fresh">
                        <li>
                            <div class="goods-img" >
                            <img :src="list.img" alt="">
                                <span class="btn-more">多种售价</span>
                            </div>
                            <h3 class="goods-name">{{list.name}}</h3>
                            <p class="goods-introduce">{{list.introduce}}</p>
                            <p class="goods-num-price">{{list.price}}元/kg</p>
                        </li>
                    </ul>
                </div>
            </div>
            
        <a class="chat" href="">
      </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data_fresh:[]
        }
    },
    methods:{
    getFresh(){
        const self = this;
      this.$http.get("/api/user/getFresh").then(response => {
        self.data_fresh = response.data;
        console.log(self.data_fresh);
      });
      }
    },
    mounted(){
        this.getFresh();
    },
}
</script>   
<style scoped>
    @import url('./fresh.scss');
</style>