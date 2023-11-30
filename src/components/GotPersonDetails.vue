

<template>
    <div>
        <br>
        <br>
        <h2>{{ person.name }} </h2>

        <br>

        <p><strong>Quotes</strong></p>
        <v-list class="transparent-card2">
            <v-list-item v-for="quote in person.quotes" :key="quote.url">

                <p class="custom-quotation">"{{ quote }}"</p>

            </v-list-item>
        </v-list>
    </div>
</template>
  
<script>
import { getPersonDetailsByName } from '@/services/gotService';

export default {
    data() {
        return {
            person: {},
        };
    },
    async mounted() {
        const personName = this.$route.params.name;
        const response = await getPersonDetailsByName(personName);
        this.person = response.person[0];
        console.log(this.person)
    },
};
</script>
  
<style scoped>
.custom-quotation {
    font-family: sans-serif;
    font-style: italic;
    position: relative;
}

.custom-quotation::before,
.custom-quotation::after {
    font-size: 1.5rem;
    position: relative;
    top: 0;
}

.custom-quotation::before {
    left: -10px;
    margin-left: -5px;
}



.custom-quotation::after {
    right: -10px;
    margin-right: -5px;
}


</style>
  