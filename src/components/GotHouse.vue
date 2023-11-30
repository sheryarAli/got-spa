// House.vue
<template>
  <div>



    <br>


    <div class="text-field-container">
      <v-text-field :loading="loading" density="compact" variant="solo-filled" append-inner-icon="mdi-magnify" single-line
        hide-details v-model="searchTerm" @input="updateFilteredHouses" label="Search Houses" class="vtext_field">

      </v-text-field>
    </div>
    <v-list class="transparent-card2">
      <v-list-item v-for="house in filteredHouses" :key="house.url"
        :to="{ name: 'HouseDetails', params: { name: house.slug } }">
        <v-list-item-title>
          <p>{{ house.name }} </p>
        </v-list-item-title>
      </v-list-item>
    </v-list>





  </div>
</template>

<script>
import { getHouses } from '../services/gotService';

export default {
  data() {
    return {
      houses: [],
      loaded: false,
      loading: false,
      searchTerm: '',
      filteredHouses: this.houses,
    };
  },
  methods: {
    onClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
    updateFilteredHouses() {
      this.filteredHouses = this.houses.filter(house =>
        house.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  async mounted() {
    const response = await getHouses();
    this.houses = response.data;
    this.filteredHouses = this.houses;

  },
};

</script>
<style>


.text-field-container {
  display: flex;
  justify-content: center;

}
</style>


