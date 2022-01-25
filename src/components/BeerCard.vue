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
      <button
        class="beer-card__button"
        type="button"
        @click="onClick"
        :disabled="isLoading"
      >
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
      isLoading: false,
    };
  },
  methods: {
    onClick() {
      this.getBeer();
    },
    getBeer() {
      this.isLoading = true;
      beerApi
        .getData()
        .then((data) => {
          this.beer = data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log("Error: " + err);
          this.isLoading = false;
        });
    },
  },
  mounted: function () {
    this.getBeer();
  },
};
</script>

<style scoped>
.beer-card {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
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
  grid-template-columns: 120px 400px;
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
  background-color: #909e9d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.beer-card__button:hover {
  background-color: #bbc5c4;
}
</style>
