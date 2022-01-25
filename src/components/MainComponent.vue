<template>
  <div class="main-component">
    <beer-card />
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
