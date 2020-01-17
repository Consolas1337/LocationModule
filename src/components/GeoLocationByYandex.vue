<template>
  <div>
  <a v-on:click="getAddress()" style="cursor: pointer; text-decoration: underline;">
    Определить местоположение
  </a>
  <p>Ваше местоположение: {{ answer }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      answer: '',
      parent: '',
    };
  },
  methods: {
    getAddress() {
      let lat; let long;
      const parent = this; // TODO: fix link to 'this' (airbnb styleguide)
      const key = ''; // Yandex Map API key here

      function succsess(position) {
        lat = position.coords.latitude; // широта
        long = position.coords.longitude; // долгота
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
</style>
