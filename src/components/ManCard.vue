<template>
  <div></div>
</template>

<script>
import { manApi } from "../api/Api.js";

export default {
  name: "ManCard",
  data() {
    return {
      man: {},
    };
  },
  mounted: function () {
    manApi
      .getData()
      .then((data) => {
        this.man = data;
        console.log(this.man);
      })
      .catch((err) => console.log("Error: " + err));
  },
};
</script>

<style scoped>
</style>
