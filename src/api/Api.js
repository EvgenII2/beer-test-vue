class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getData() {
    return fetch(`${this._baseUrl}`).then(this._checkResponse);
  }
}

const beerOptions = {
  baseUrl: "https://random-data-api.com/api/beer/random_beer",
};
const manOptions = {
  baseUrl: "https://random-data-api.com/api/users/random_user",
};

export const beerApi = new Api(beerOptions);
export const manApi = new Api(manOptions);
