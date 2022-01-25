<template>
  <div class="main-component">
    <beer-card />
    <h1 class="main-component__title">А не выпить ли мне пива?</h1>
    <man-card />
  </div>
</template>

<script>
import BeerCard from "./BeerCard.vue";
import ManCard from "./ManCard.vue";

export default {
  name: "MainComponent",
  components: {
    BeerCard,
    ManCard,
  },
};
</script>

<style scoped>
.main-component {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  padding: 20px;
}
.main-component__title {
  margin: 0;
  padding: 0;
}
</style>
