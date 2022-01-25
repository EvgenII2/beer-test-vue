<template>
  <div class="beer-card">
    <img class="beer-card__image" src="../assets/beer-image.png" />
    <div class="beer-card__info">
      <ul class="beer-card__list">
        <li class="beer-card__list-item">
          <span class="beer-card__list-item-title">Название:</span>
          <span class="beer-card__list-item-value">{{ beer.name }}</span>
        </li>
        <li class="beer-card__list-item">
          <span class="beer-card__list-item-title">Компания:</span>
          <span class="beer-card__list-item-value">{{ beer.brand }}</span>
        </li>
        <li class="beer-card__list-item">
          <span class="beer-card__list-item-title">Стиль:</span>
          <span class="beer-card__list-item-value">{{ beer.style }}</span>
        </li>
        <li class="beer-card__list-item">
          <span class="beer-card__list-item-title">Cахар:</span>
          <span class="beer-card__list-item-value">{{ beer.blg }}</span>
        </li>
        <li class="beer-card__list-item">
          <span class="beer-card__list-item-title">Алкоголь:</span>
          <span class="beer-card__list-item-value">{{ beer.alcohol }}</span>
        </li>
        <li class="beer-card__list-item">
          <span class="beer-card__list-item-title">Хмель:</span>
          <span class="beer-card__list-item-value">{{ beer.hop }}</span>
        </li>
        <li class="beer-card__list-item">
          <span class="beer-card__list-item-title">Солод:</span>
          <span class="beer-card__list-item-value">{{ beer.malts }}</span>
        </li>
        <li class="beer-card__list-item">
          <span class="beer-card__list-item-title">Дрожжи:</span>
          <span class="beer-card__list-item-value">{{ beer.yeast }}</span>
        </li>
      </ul>
      <button class="beer-card__button" type="button" @click="onClick">
        Другое
      </button>
    </div>
  </div>
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
  methods: {
    onClick() {
      this.getBeer();
    },
    getBeer() {
      beerApi
        .getData()
        .then((data) => {
          this.beer = data;
          console.log(this.beer);
        })
        .catch((err) => console.log("Error: " + err));
    },
  },
  mounted: function () {
    this.getBeer();
  },
};
</script>

<style scoped>
.beer-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 550px;
}
.beer-card__image {
  max-width: 250px;
}
.beer-card__info {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}
.beer-card__list {
  margin: 0;
  padding: 0;
}
.beer-card__list-item {
  list-style: none;
  font-size: 20px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 40% 60%;
}
.beer-card__list-item:last-of-type {
  margin-bottom: 0px;
}
.beer-card__list-item-title {
  font-weight: 700;
}
.beer-card__button {
  width: 80%;
  font-size: 20px;
  padding: 5px;
  background-color: rgb(142, 155, 154);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.beer-card__button:hover {
  background-color: rgb(177, 184, 183);
}
</style>
