<template>
  <div></div>
</template>

<script>
import { beerApi } from "../api/Api.js";

export default {
  name: "BeerCard",
  data() {
    return {
      beer: {},
    };
  },
  mounted: function () {
    beerApi
      .getData()
      .then((data) => {
        this.beer = data;
        console.log(this.beer);
      })
      .catch((err) => console.log("Error: " + err));
  },
};
</script>

<style scoped>
</style>
