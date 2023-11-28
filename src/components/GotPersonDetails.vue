

<template>
    <div>
        <h2>{{ person.name }} Details</h2>
        <div>{{ person.house ? person.house.name : 'Unknown House' }}</div> 
        
    <br>
    <br>
        <p><strong>Quotes</strong></p>
        <li v-for="quote in person.quotes" :key="quote.url">
            <p>{{ quote }}</p>
        </li>
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
/* Add component-specific styles here */
</style>
  