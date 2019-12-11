<template>
  <div class="travel">
    <div class="travel-top">
      <div class="travel-logo">
        <img src="@/../static/img/rests_img/vegatable_title.jpg" alt />
      </div>
      <div class="travel-title">
        <div class="travel-max">蔬菜</div>
        <div class="travel-min">白菜</div>
      </div>
    </div>

    <div class="travel-conter">
      <div class="theme-left">
        <div class="theme">
          <img src="@/../static/img/vegetable_img/vegetable_1.jpg" alt />
        </div>
      </div>
      <div class="theme-right">
        <div class="litter-box">
          <div class="litter-img">
            <img src="@/../static/img/vegetable_img/vegetable_2.jpg" alt />
          </div>

          <div class="litter-img">
            <img src="@/../static/img/vegetable_img/vegetable_3.jpg" alt />
          </div>
        </div>

        <div class="litter-box">
          <div class="litter-img">
            <img src="@/../static/img/vegetable_img/vegetable_4.jpg" alt />
          </div>
          <div class="litter-img">
            <img src="@/../static/img/vegetable_img/vegetable_5.jpg" alt />
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
    getVegetables() {
      const self = this;
      this.$http.get("/api/user/getVegetables").then(response => {
        console.log(response.data);
        self.picters = response.data;
        console.log(self.picters);
      });
    }
  },
  mounted() {
      this.getVegetables();
  },
};
</script>
<style >
@import "./vegetables.scss";
</style>