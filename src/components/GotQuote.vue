<template>
    <div class="custom_q">

        <ul>
            <li v-for="quote in quotes" :key="quote.url">
                {{ quote.sentence }}
            </li>
        </ul>
        <v-btn size="block" density="comfortable" color="#5865f2" @click="fetchQuotes">Get New Quotes</v-btn>
    </div>
    
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

.custom_q{
    justify-content: flex-end;
}
/* Add component-specific styles here */
</style>
  