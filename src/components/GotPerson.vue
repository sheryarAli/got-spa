<template>
    <div>


        <div class="text-field-container">
            <v-text-field :loading="loading" density="compact" variant="solo-filled" append-inner-icon="mdi-magnify"
                single-line hide-details v-model="searchTerm" @input="updateFilteredPeople" label="Search Person"
                class="max-width-50">

            </v-text-field>


        </div>

        <!-- <div class="text-center">

            <ul>
                <li v-for="person in filteredPeople" :key="person.url">
                  
                    <router-link :to="{ name: 'PersonDetails', params: { name: person.slug } }">{{ person.name
                    }}</router-link>
                    <div>{{ person.house ? person.house.name : 'Unknown House' }}</div>
                </li>
            </ul>
        </div> -->


        <v-list class="transparent-card2">
            <v-list-item v-for="person in filteredPeople" :key="person.url"
                :to="{ name: 'PersonDetails', params: { name: person.slug } }">
                <v-list-item-title>
                    {{ person.name }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
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
ul {
    text-decoration: none;
}

.max-width-50 {
    max-width: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.text-field-container {
    display: flex;
    justify-content: center;

}

/* Add component-specific styles here */
</style>
  