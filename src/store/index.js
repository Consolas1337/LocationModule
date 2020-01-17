import Vue from 'vue';
import Vuex from 'vuex';
import citylist from './data/cities.json';

Vue.use(Vuex);

let regions = [];

citylist.forEach((entry) => {
  regions.push(entry['Регион']);
});
regions = [...new Set(regions)];
regions.sort();

export default new Vuex.Store({
  state: {
    citylist,
    regions,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
