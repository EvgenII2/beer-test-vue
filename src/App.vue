<template>
  <div id="app">
    <h1>Тестовое задание компании "Банда умников"</h1>
    <beer-card />
    <man-card />
  </div>
</template>

<script>
import BeerCard from "./components/BeerCard.vue";
import ManCard from "./components/ManCard.vue";

export default {
  name: "App",
  components: {
    BeerCard,
    ManCard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: 60px auto 0;
  background-color: #b4bcc4;
  border-radius: 15px;
}
</style>
