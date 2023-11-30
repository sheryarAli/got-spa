

<template>
    <div v-if="!isLoaded">
        Loading...
    </div>
    <div v-else>
        <br>
        <br>
        <h2>{{ person.name }} </h2>
        <h3>{{ house ? house.name : "House not known" }} </h3>

        <br>

        <p><strong>Quotes</strong></p>
        <!-- <v-list class="transparent-card2"> -->
        <!-- <v-list-item v-for="quote in quotes" :key="quote.url"> -->

        <p class="custom-quotation">"{{ randomQuote }}"</p>

        <!-- </v-list-item> -->
        <!-- </v-list> -->
        <br>
        <div class="custom_div_btn">
            <v-btn class="custom_btn" @click="selectNewQuote">
                <p>Other Quote</p>
            </v-btn>
        </div>
    </div>
</template>
  
<script>
import { getPersonDetailsByName } from '@/services/gotService';

export default {
    computed: {
        isLoaded() {
            return this.person && this.quotes.length > 0;
        }
    },
    data() {
        return {
            person: {},
            house: {},
            quotes: [],
            randomQuote: '',
            lastIndex: -1
        };
    },
    async mounted() {
        const personName = this.$route.params.name;
        const response = await getPersonDetailsByName(personName);
        this.person = response.person[0];
        this.house = response.person[0].house;
        this.quotes = response.person[0].quotes;
        console.log(this.quotes);
        this.selectNewQuote();

    },
    methods: {
        selectNewQuote() {
            const quotesLength = this.quotes.length;
            if(this.lastIndex === quotesLength - 1){
                this.lastIndex = 0;
            }
            else if(quotesLength === 1){
                this.lastIndex = 0;
                

            }else if(quotesLength > 1){
                this.lastIndex++;

            }
            this.randomQuote = this.quotes[this.lastIndex];
            
        }
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
</style>
  