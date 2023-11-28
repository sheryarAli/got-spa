// House.vue
<template>
  <div>
    

    <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
      <v-card-text>
        <v-text-field :loading="loading" density="compact" variant="solo" 
          append-inner-icon="mdi-magnify" single-line hide-details v-model="searchTerm" @input="updateFilteredHouses"
          label="Search Houses">

        </v-text-field>
      </v-card-text>
    </v-card>

    <ul>
      <li v-for="house in filteredHouses" :key="house.url">
        <router-link :to="{ name: 'HouseDetails', params: { name: house.slug } }">{{ house.name }}</router-link>
      </li>
    </ul>
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
