<template>
    <div>

        <!-- <ul>
            <li v-for="quote in quotes" :key="quote.url">
                {{ quote.sentence }}
            </li>
        </ul> -->
        <v-list>
            <v-list-item v-for="quote in quotes" :key="quote.url">

                <p class="custom-quotation">{{ quote.sentence }} </p>
                <span class="person-name"> {{ quote.character.name }}</span>

            </v-list-item>
        </v-list>
        <v-btn @click="fetchQuotes">Get New Quotes</v-btn>
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
            console.log(response.data);
            // const membersNames = response.house[0].members.map(member => member.name);

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
/* Custom quotation style */
.custom-quotation {
    font-family: sans-serif;
    font-style: italic;
    position: relative;
}

.custom-quotation::before,
.custom-quotation::after {
    content: '"';
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

.person-name {
    font-weight: bold;
    /* Make the name bold */
    color: #ccc7c7;
    /* Customize the color */
}</style>
  