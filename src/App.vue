
<template>
  <div id="app">
    <GeoLocationByYandex/>
    <br/>
    <ChooseCity/>
  </div>
</template>

<script>
import ChooseCity from './components/ChooseCity.vue';
import GeoLocationByYandex from './components/GeoLocationByYandex.vue';

export default {
  name: 'app',
  components: {
    ChooseCity,
    GeoLocationByYandex,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
