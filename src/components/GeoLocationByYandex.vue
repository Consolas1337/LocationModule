<template>
  <div id="AppGetLocation">
    <input type="text" placeholder="Ваш город" v-model="answer" id="search" v-on:change="locate()">
    <p v-on:click="getAddress()" style="cursor: pointer; text-decoration: underline;">
      Определить местоположение
    </p>
    <yandex-map
    :coords="coords"
    :zoom="zoom"
    :controls='[]'
    @map-was-initialized="initMapHandler"
    />
  </div>
</template>
<script>
import { yandexMap, loadYmap } from 'vue-yandex-maps';

export default {
  data() {
    return {
      answer: '',
      parent: null,
      coords: [69, 61], // Default map position
      zoom: 12,
      key: '', // Yandex Map API key here
    };
  },
  components: {
    yandexMap,
  },
  created() {
    loadYmap({ mode: 'debug' });
  },
  methods: {
    locate() {
      this.$http.get(`https://geocode-maps.yandex.ru/1.x?geocode=${this.answer}&apikey=${this.key}&lang=ru_RU&kind=locality&format=json&results=1`).then((response) => {
        // eslint-disable-next-line max-len
        const latLongStr = response.body.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
        this.coords = latLongStr.split(' ');
        [this.coords[0], this.coords[1]] = [this.coords[1], this.coords[0]];
      });
    },
    initMapHandler() {
      window.ymaps.ready(this.init);
    },
    init() {
      // eslint-disable-next-line no-unused-vars
      const suggestElement = new window.ymaps.SuggestView('search', {
        boundedBy: [[26, 74], [-170, 40]],
        results: 2,
      });
    },
    getAddress() {
      let lat; let long;
      const parent = this; // TODO: fix link to 'this' (airbnb styleguide)

      function succsess(position) {
        lat = position.coords.latitude; // широта
        long = position.coords.longitude; // долгота
        parent.coords = [lat, long];
        parent.$http.get(`https://geocode-maps.yandex.ru/1.x?geocode=${long},${lat}&apikey=${parent.key}&lang=ru_RU&kind=locality&format=json&results=1`).then((response) => {
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
#AppGetLocation {
  position: fixed;
  width: 100%;
  height: 100%;
}
.ymap-container {
  height: 45%;
  margin: 0 25% 0 25%;
  width: 50%;
}
input {
  width: 20%;
  margin: 5px 0 5px 0;
}
</style>
