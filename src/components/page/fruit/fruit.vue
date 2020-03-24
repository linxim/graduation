<template>
  <div>
    <div class="travel">
      <div class="travel-top">
        <div class="travel-logo">
          <img src="@/../static/img/rests_img/fruits_title.jpg" alt />
        </div>
        <div class="travel-title">
          <div class="travel-max">水果</div>
          <div class="travel-min" style="display:flex;justify-content:space-between;">
            <div>

             <span>  <i class="iconfont icon-shuiguopingguo"></i> 苹果</span>
             <i class="iconfont icon-lizi"></i> 梨子</span> 
             <i class="iconfont icon-yingtao"></i> 樱桃</span>
            </div>
             <div> <a href="">查看更多></a> </div>
             </div>
        </div>
      </div>

      <div class="travel-conter">
        <div class="img-left">
          <div class="big-img"  @click="checkimg">
            <img :src="picture[0].img" :alt="picture[0].id"/>
            <span class="img-name" >{{picture[0].name}}</span>
          </div>
          <div class="litter-box">
            <div class="litter-img" @click="checkimg">
              <img :src="picture[1].img"  :alt="picture[1].id" />
              <span class="img-name">{{picture[1].name}}</span>
            </div>
            <div class="litter-img"  @click="checkimg">
              <img :src="picture[2].img" :alt="picture[2].id" />
              <span class="img-name">{{picture[2].name}}</span>
            </div>
          </div>
        </div>
        <div class="img-right">
          <div class="litter-box">
            <div class="litter-img"  @click="checkimg">
              <img :src="picture[3].img" :alt="picture[3].id"  />

              <span class="img-name">{{picture[3].name}}</span>
            </div>
            <div class="litter-img"  @click="checkimg">
              <img :src="picture[4].img" :alt="picture[4].id" />

              <span class="img-name"  @click="checkimg">{{picture[4].name}}</span>
            </div>
          </div>

          <div class="big-img"  @click="checkimg">
            <img :src="picture[5].img" :alt="picture[5].id" />

            <span class="img-name">{{picture[5].name}}</span>
          </div>
            <el-dialog title="新鲜到家" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                <div class="pop_win">
                <img :src="pop_show.img" alt="" />
             <div class="title" v-model="pop_show.title">{{pop_show.title}}</div>
               <p class="desc">{{pop_show.desc}}</p>
                     <p class="price">{{pop_show.price}}</p>
                          </div>
                      </el-form>
                     <div slot="footer" class="dialog-footer">
                 <el-button @click="dialogFormVisible = false">取 消</el-button>
                     <el-button type="primary" @click="dialogFormVisible = false">添加购物车</el-button>
                 </div>
                </el-dialog>
        </div>
      </div>
  
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        picture: [],
        dialogFormVisible :false,
        pop_show:{
          img:'',
          title:'',
          desc:'',
          price:'',
        },
        formLabelWidth:'120px',
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
    };
  },
  methods: {
   checkimg(e){
     var that=e.target.alt;
     console.log(e);
     that=that-1;
     console.log(that);
     for(var i=0;i<this.picture.length;i++){
       if(that==i){
         this.pop_show.img=this.picture[i].img;
         this.pop_show.title=this.picture[i].title;
         this.pop_show.price=this.picture[i].price;
         this.pop_show.desc=this.picture[i].desc;
       }
     }
     this.dialogFormVisible=true;
     console.log(this.pop_show);
   },
    getFruit() {
      const self = this;
      this.$http.get("/api/user/getFruit").then(response => {
        self.picture = response.data;
   
      });
    }
  },
  mounted() {
      this.getFruit();
  },
};
</script>
<style  scoped>
 @import "./fruit.scss";
 @import url("//at.alicdn.com/t/font_1677509_ru4l794wd4.css");
</style>
