<template>
    <div>
        <select @change='result = loadCities($event)'>
            <option selected disabled>
                Выберите свой регион
            </option>
            <option v-for='region in store.state.regions' :key='region.id' :value='region'>
                {{ region }}
            </option>
        </select>
        <br/>
        <select onchange=''>
            <option selected disabled>
                Выберите свой город
            </option>
            <option v-for='city in result' :key='city.id' :value='city'>
                {{ city.Город }}
            </option>
        </select>
    </div>
</template>

<script>
import store from '../store';

export default {
  name: 'app',
  data() {
    return {
      store,
      result: [],
    };
  },
  methods: {
    loadCities(event) {
      this.result = [];
      store.state.citylist.forEach((entry) => {
        if (entry.Регион === event.target.value) {
          this.result.push(entry);
        }
      });
      return this.result;
    },
  },
};
</script>

<style>
select {
  width: 15%;
  margin: 5px 0 5px 0;
}
</style>
