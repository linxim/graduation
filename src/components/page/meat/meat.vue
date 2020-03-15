<template>
  <div class="travel">
    <div class="travel-top">
      <div class="travel-logo">
        <img src="@/../static/img/meat_img/meat_title.jpg" alt />
      </div>
      <div class="travel-title">
        <div class="travel-max">鲜肉</div>
        <div class="travel-min">灵魂和身体，总有一个在路上</div>
      </div>
    </div>

    <div class="aim">
      <ul class="list">
        <li class="goods" v-for="(item,value) in picters" :key="value">
          <div class="pic">
            <img :src="item.img" />
          </div>

          <div class="aim-title">
            <p>
              {{ item.info}}
              <span>{{item.money}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picters: []
    };
  },
  methods: {
    getFruit() {
      const self = this;
      this.$http.get("/api/user/getMeat").then(response => {
      
        self.picters = response.data;
      
      });
    }
  },
  mounted() {
    this.getFruit();
  }
};
</script>
<style >
@import "./meat.scss";
</style>