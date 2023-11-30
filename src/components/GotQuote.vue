<template>
    <div>

        <br>
        <br>
        

        <v-list class="transparent-card2">
            <v-list-item v-for="quote in quotes" :key="quote.url">

                <p class="custom-quotation">"{{ quote.sentence }}"</p>
                <span class="person-name"> <p>{{ quote.character.name }}</p></span>

            </v-list-item>
        </v-list>
        <br>
        <div class="custom_div_btn">
            <v-btn class="custom_btn"  @click="fetchQuotes"><p>Replace Quotes</p></v-btn>
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
.custom_div_btn {
    margin-top: 10px;
    margin-bottom: 10px;
    
}
.custom_btn{
    background-color: rgb(39, 5, 5) !important;
}



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


.person-name {
    font-weight: bold;
    font-size: 0.8rem;    
    color: #ccc7c7;
    
}
</style>
  