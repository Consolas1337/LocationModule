import Vue from 'vue';
import VueResource from 'vue-resource';
import YmapPlugin from 'vue-yandex-maps';
import App from './App.vue';
import store from './store';

const settings = {
  apiKey: '', // Yandex map API key
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
  mode: 'debug', // !!DEBUG MODE!!! in PRODUCTION REMOVE THIS LINE or change to 'release'
};

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(YmapPlugin, settings);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
