<template>
  <div id="app">
  <p v-on:click="getAddress()" style="cursor: pointer; text-decoration: underline;">
    Определить местоположение
  </p>
  <p>Ваше местоположение: {{ answer }}</p>
  <yandex-map :coords="coords" :zoom="zoom">

  </yandex-map>
  </div>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps';

export default {
  data() {
    return {
      answer: '',
      parent: '',
      coords: [1, 1],
      zoom: 13,
    };
  },
  components: {
    yandexMap,
  },
  methods: {
    getAddress() {
      let lat; let long;
      const parent = this; // TODO: fix link to 'this' (airbnb styleguide)
      const key = ''; // Yandex Map API key here
      // eslint-disable-next-line no-unused-vars

      function succsess(position) {
        lat = position.coords.latitude; // широта
        long = position.coords.longitude; // долгота
        parent.coords = [lat, long];
        parent.$http.get(`https://geocode-maps.yandex.ru/1.x?geocode=${long},${lat}&apikey=${key}&lang=ru_RU&kind=locality&format=json&results=1`).then((response) => {
          // eslint-disable-next-line max-len
          parent.answer = response.body.response.GeoObjectCollection.featureMember[0].GeoObject.name; // Parsing JSON DOM-tree
        });
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(succsess); // Запрос местоположения(координаты)
      } else {
        // if browser not support geolocation TODO: need action here??
      }
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 1000px;
}

.ymap-container {
  height: 40%;
    margin: 0 20% 0 20%;
  width: 60%;
}
</style>
