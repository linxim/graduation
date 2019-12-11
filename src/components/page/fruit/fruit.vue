<template>
  <div>
    <div class="travel">
      <div class="travel-top">
        <div class="travel-logo">
          <img src="@/../static/img/rests_img/fruits_title.jpg" alt />
        </div>
        <div class="travel-title">
          <div class="travel-max">水果</div>
          <div class="travel-min">苹果 梨子 樱桃</div>
        </div>
      </div>

      <div class="travel-conter">
        <div class="img-left">
          <div class="big-img">
            <img src="@/../static/img/fruits_img/fruits_1.jpg" alt />

            <span class="img-name">酸奶</span>
          </div>

          <div class="litter-box">
            <div class="litter-img">
              <img src="@/../static/img/fruits_img/fruits_2.jpg" />

              <span class="img-name">车厘子</span>
            </div>
            <div class="litter-img">
              <img src="@/../static/img/fruits_img/fruits_3.jpg" alt />

              <span class="img-name">芒果</span>
            </div>
          </div>
        </div>
        <div class="img-right">
          <div class="litter-box">
            <div class="litter-img">
              <img src="@/../static/img/fruits_img/fruits_4.jpg" alt />

              <span class="img-name">圣女果</span>
            </div>
            <div class="litter-img">
              <img src="@/../static/img/fruits_img/fruits_5.jpg" alt />

              <span class="img-name">草莓</span>
            </div>
          </div>

          <div class="big-img">
            <img src="@/../static/img/fruits_img/fruits_6.jpg" alt />

            <span class="img-name">枇杷</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        picters: [],
    };
  },
  methods: {
    getFruit() {
      const self = this;
      this.$http.get("/api/user/getMeat").then(response => {
        console.log(response.data);
        self.picters = response.data;
        console.log(self.picters);
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
</style>
