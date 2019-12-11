<template>
  <div>
    <page-header></page-header>
    <fruit></fruit>
    <vegetables></vegetables>
    <meat></meat>
  </div>
</template>

<script>
import PageHeader from "./PageHeader";
import Fruit from "./fruit/fruit"
import Vegetables from "./vegetables/vegetables"
import Meat from "./meat/meat"

export default {
  name: "Index",
  components: {
    // FooterLy,
    PageHeader,
    Fruit,
    Vegetables,
    Meat,
  },
  data() {
    return {
      show: false,
      picters: [],
      
  
      
    };
  },

  methods: {
   
  },
  mounted() {
   
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}


