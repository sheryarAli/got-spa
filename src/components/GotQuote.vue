<template>
    <div>


        <v-list class="transparent-card2">
            <v-list-item v-for="quote in quotes" :key="quote.url">

                <p class="custom-quotation">{{ quote.sentence }} </p>
                <span class="person-name"> <p>{{ quote.character.name }}</p></span>

            </v-list-item>
        </v-list>
        <div class="button_custom">
            <v-btn  @click="fetchQuotes"><p>Replace</p></v-btn>
        </div>
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

    },

};
</script>
  
<style scoped>
.button_custom {
    margin-top: 10px;
    margin-bottom: 10px;
}

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
}
</style>
  