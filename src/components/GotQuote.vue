<template>
    <div>

        <ul>
            <li v-for="quote in quotes" :key="quote.url">
                {{ quote.sentence }}
            </li>
        </ul>
    </div>
    <v-btn @click="fetchQuotes">Get New Quotes</v-btn>
</template>
  
<script>
import { getQuotes } from '@/services/gotService';

export default {
    data() {
        return {
            quotes: [],
        };
    },
    methods: {
        async fetchQuotes() {
            const response = await getQuotes();
            this.quotes = response.data;

        }
    },
    mounted() {
        this.fetchQuotes();
        //   const response = await getQuotes();
        //   this.quotes = response.data;
    },

};
</script>
  
<style scoped>
/* Add component-specific styles here */
</style>
  