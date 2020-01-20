
<template>
  <div id="app">
    <ChooseCity/>
    <hr/>
    <br/>
    <GeoLocationByYandex/>
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
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
