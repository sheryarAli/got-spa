<template>
    <div>

        <br>

        <div class="text-field-container">
            <v-text-field :loading="loading" density="compact" variant="solo-filled" append-inner-icon="mdi-magnify"
                single-line hide-details v-model="searchTerm" @input="updateFilteredPeople" label="Search Person"
                class="vtext_field">

            </v-text-field>


        </div>




        <v-list class="transparent-card2">
            <v-list-item class="custom_li" v-for="person in filteredPeople" :key="person.url"
                :to="{ name: 'PersonDetails', params: { name: person.slug } }">
                <v-list-item-title>
                    <p> {{ person.name }}</p>
                    <p class="custom_p">{{ person.house ? person.house.name : "House not known" }}</p>

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
        // const response2 = await getPeopleWithImages();
        const response = await getPeople();
        this.people = response.data;
        this.filteredPeople = this.people;

    },
};
</script>
  
<style scoped>


.max-width-50 {
    max-width: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.text-field-container {
    display: flex;
    justify-content: center;

}
.custom_li{
    margin-bottom: 10px;
    margin-bottom: 10px;
}
.custom_p{


    font-size: 0.8rem;
}
</style>
  