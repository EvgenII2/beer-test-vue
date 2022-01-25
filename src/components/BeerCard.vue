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
          <span class="beer-card__list-item-value">{{ getYeast }}</span>
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
    <img class="beer-card__image" src="../assets/beer-image.png" />
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
  computed: {
    getYeast() {
      return this.beer.yeast?.split("-")[1].trim();
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
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 15px;
}
.beer-card__image {
  max-width: 25%;
}
.beer-card__info {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
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
  grid-template-columns: 1fr 3fr;
  column-gap: 15px;
}
.beer-card__list-item:last-of-type {
  margin-bottom: 0px;
}
.beer-card__list-item-title {
  font-weight: 700;
}
.beer-card__button {
  width: 80%;
  font-size: 19px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
}
.beer-card__button:hover {
  background-color: #bbc5c4;
}
@media (max-width: 901px) {
  .beer-card__list-item {
    font-size: 17px;
    text-shadow: 1px 1px 1px #fff;
  }
  .beer-card__button {
    font-size: 16px;
  }
  .beer-card__image {
    display: none;
  }
  .beer-card__info {
    background-image: url("../assets/beer-image.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
@media (max-width: 621px) {
  .beer-card__list-item {
    font-size: 14px;
  }
  .beer-card__button {
    font-size: 13px;
  }
}
</style>
