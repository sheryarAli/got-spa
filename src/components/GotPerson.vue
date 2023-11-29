<template>
    <div>


        <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
            <v-card-text>
                <v-text-field :loading="loading" density="compact" variant="solo" append-inner-icon="mdi-magnify"
                    single-line hide-details v-model="searchTerm" @input="updateFilteredPeople" label="Search Person">

                </v-text-field>
            </v-card-text>
        </v-card>


        <div class= "text-center">

            <ul>
                <li v-for="person in filteredPeople" :key="person.url">
                    <!-- {{ person.name }}  -->
                    <router-link :to="{ name: 'PersonDetails', params: { name: person.slug } }">{{ person.name
                    }}</router-link>
                    <div>{{ person.house ? person.house.name : 'Unknown House' }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { getPeople } from '@/services/gotService';

export default {
    data() {
        return {
            people: [],
            loaded: false,
            loading: false,
            searchTerm: '',
            filteredPeople: this.people,
        };
    },
    methods: {

        updateFilteredPeople: function () {
            this.filteredPeople = this.people.filter(people =>
                people.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        },
    },
    async mounted() {
        const response = await getPeople();
        this.people = response.data;
        this.filteredPeople = this.people;

    },
};
</script>
  
<style scoped>

ul{
    text-decoration: none;
}
/* Add component-specific styles here */
</style>
  