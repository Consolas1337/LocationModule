import Vue from 'vue';
import VueResource from 'vue-resource';
import YmapPlugin from 'vue-yandex-maps';
import App from './App.vue';
import store from './store';

const settings = {
  apiKey: 'dcd92292-7d57-4854-93c2-3267773325c2', // Yandex map API key
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
};

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(YmapPlugin, settings);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
