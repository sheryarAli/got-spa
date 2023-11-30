// House.vue
<template>
  <div>


  <!-- <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
      <v-card-text>
        
      </v-card-text>
      </v-card> -->

    <div class="text-field-container">
      <v-text-field :loading="loading" density="compact" variant="solo-filled" append-inner-icon="mdi-magnify" single-line
        hide-details v-model="searchTerm" @input="updateFilteredHouses" label="Search Houses" class="max-width-50">

      </v-text-field>
    </div>
    <v-list class="transparent-card2">
      <v-list-item  v-for="house in filteredHouses" :key="house.url"
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
.max-width-50 {
  max-width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.text-field-container {
    display: flex;
    justify-content: center;
    
}

</style>


