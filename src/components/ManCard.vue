<template>
  <div class="man-card" v-if="isLoading">
    <div class="man-card__info">
      <ul class="man-card__list">
        <li class="man-card__list-item">
          <span class="man-card__list-item-title">Имя:</span>
          <span class="man-card__list-item-value">{{ getFullname }}</span>
        </li>
        <li class="man-card__list-item">
          <span class="man-card__list-item-title">Пол:</span>
          <span class="man-card__list-item-value">{{ man.gender }}</span>
        </li>
        <li class="man-card__list-item">
          <span class="man-card__list-item-title">Адрес:</span>
          <span class="man-card__list-item-value">{{ getAddress }}</span>
        </li>
        <li class="man-card__list-item">
          <span class="man-card__list-item-title">Дата рождения:</span>
          <span class="man-card__list-item-value">{{ getBirthdayDate }}</span>
        </li>
        <li class="man-card__list-item">
          <span class="man-card__list-item-title">Email:</span>
          <span class="man-card__list-item-value">{{ man.email }}</span>
        </li>
        <li class="man-card__list-item">
          <span class="man-card__list-item-title">Телефон:</span>
          <span class="man-card__list-item-value">{{ man.phone_number }}</span>
        </li>
        <li class="man-card__list-item">
          <span class="man-card__list-item-title">Должность:</span>
          <span class="man-card__list-item-value">{{
            man.employment ? man.employment.title : "none"
          }}</span>
        </li>
      </ul>
    </div>
    <img class="man-card__image" :src="man.avatar" />
  </div>
</template>

<script>
import { manApi } from "../api/Api.js";

export default {
  name: "ManCard",
  data() {
    return {
      man: {},
      isLoading: false,
    };
  },
  methods: {
    getUser() {
      manApi
        .getData()
        .then((data) => {
          this.man = data;
          this.isLoading = true;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log("Error: " + err);
        });
    },
  },
  computed: {
    getFullname() {
      return `${this.man.first_name} ${this.man.last_name}`;
    },
    getAddress() {
      return `${this.man.address?.state}, ${this.man.address?.city}, ${this.man.address?.street_address}`;
    },
    getBirthdayDate() {
      const DATE_OPTIONS = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const LOCAL = "ru-RU";
      return new Date(this.man.date_of_birth).toLocaleDateString(
        LOCAL,
        DATE_OPTIONS
      );
    },
  },
  mounted: function () {
    this.getUser();
  },
};
</script>

<style scoped>
.man-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
}
.man-card__image {
  /* max-width: 250px; */
  background-color: white;
  border-radius: 30px;
}
.man-card__info {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}
.man-card__list {
  margin: 0;
  padding: 0;
}
.man-card__list-item {
  list-style: none;
  font-size: 20px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 150px 400px;
}
.man-card__list-item:last-of-type {
  margin-bottom: 0px;
}
.man-card__list-item-title {
  margin: auto 0;
  font-weight: 700;
}
.man-card__list-item-value {
  margin: auto 0;
}
.man-card__button {
  width: 80%;
  font-size: 20px;
  padding: 5px;
  background-color: rgb(142, 155, 154);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.man-card__button:hover {
  background-color: rgb(177, 184, 183);
}

@media (max-width: 901px) {
  .man-card {
    flex-direction: column-reverse;
    row-gap: 20px;
  }
  .man-card__image {
    /* max-width: 80%; */
  }
}
@media (max-width: 621px) {
  .man-card__list-item-title {
    display: none;
  }
  .man-card__list-item {
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
}
</style>
