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
      let lat; let long; const parent = this; // fix link to 'this' (airbnb)
      const key = ''; // Google Map API key here
      parent.answer = '...';
      function succsess(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        parent.$http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=false&key=${key}`).then((response) => {
          parent.answer = response.body.results[0].address_components[1].long_name;
        });
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(succsess);
      } else {
        // if browser not support geolocation :TODO
      }
    },
  },
};
</script>

<style>
</style>
