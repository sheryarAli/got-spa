<template>
  <v-app >
    <!-- <div id="app"> -->

      <!-- <div id="app">
        <header>
          <h1>Game of Thrones</h1>
        </header>
        <nav><router-view />
          <button @click="loadHouses">Houses</button>
          <button @click="loadPersons">Persons</button>
          <button @click="loadQuotes">Quotes</button>
        </nav>
        <section>
          <h2>{{ pageTitle }}</h2>
          <ul v-if="listItems.length">
            <li v-for="item in listItems" :key="item.id" @click="listItemClick(item)">
              {{ item.sentence ? item.sentence: item.name }}
            </li>
          </ul>
          <button v-if="showLoadOtherButton && ( pageTitle === 'Quotes')" @click="loadOther">Load Other {{ itemType }}</button>
          <button v-if="showLoadOtherButton" @click="loadOther">Load Other {{ itemType }}</button>
        </section>
      </div> -->

      <Header/>




      <router-view />
      <!-- <v-container>
      Using v-btn to make the card clickable

      Using v-card as a button
      <v-card>
          <v-card-title>Click Me</v-card-title>
          <v-card-subtitle>Subtitle</v-card-subtitle>

          <v-card-actions>
            <v-btn @click="showDialog">
              This is some content for the card button.
            </v-btn>
          </v-card-actions>

        </v-card>

      </v-container> -->
      <Footer />
    <!-- </div> -->
  </v-app>
</template>

<script>


import Footer from '@/components/layout/GotFooter.vue';
import Header from '@/components/layout/GotHeader.vue';
export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },

  methods: {
    showDialog() {
      alert('Button Clicked!');
    },
  },
};



// export default {
//   data() {
//     return {
//       pageTitle: '',
//       listItems: [],
//       showLoadOtherButton: false,
//       itemType: '',
//       baseUrl: 'https://api.gameofthronesquotes.xyz/v1',
//     };
//   },
//   methods: {
//     async fetchData(url) {
//       const response = await fetch(url);
//       return await response.json();
//     },
//     async loadHouses() {
//       this.pageTitle = 'Houses';
//       this.listItems = await this.fetchData(`${this.baseUrl}/houses`);
//       console.log(this.listItems)
//     },
//     async loadHouseMembers(house) {
//       this.pageTitle = `${house.name} Members`;
//       this.listItems = await this.fetchData(`${this.baseUrl}/houses/${house.slug}`);
//     },
//     async loadPersons() {
//       this.pageTitle = 'Persons';
//       this.listItems = await this.fetchData(`${this.baseUrl}/characters`);
//     },
//     async loadPersonDetails(person) {
//       this.pageTitle = `${person.character} Details`;
//       this.listItems = [
//         { name: `Name: ${person.character}` },
//         { name: `House: ${person.house}` },
//         ...await this.fetchData(`${this.baseUrl}/characters/${person.id}`),
//       ];
//       this.showLoadOtherButton = true;
//       this.itemType = 'Quotes';
//     },
//     async loadOtherQuotes(person) {
//       const newQuotes = (await this.fetchData(`${this.baseUrl}/characters/${person.id}`)).slice(5, 10);
//       this.listItems.push(...newQuotes);
      
//     },
//     async loadQuotes() {
//       this.pageTitle = 'Quotes';
//       this.listItems = (await this.fetchData(`${this.baseUrl}/random/5`));
      
//       this.showLoadOtherButton = true;
//       this.itemType = 'Quotes';
//     },
//     async loadOtherRandomQuotes() {
//       this.listItems = (await this.fetchData(`${this.baseUrl}/random/5`));
      
//     },
//     listItemClick(item) {
//       if (this.pageTitle === 'Houses') {
//         this.loadHouseMembers(item);
//       } else if (this.pageTitle === 'Persons') {
//         this.loadPersonDetails(item);
//       }
//     },
//     loadOther() {
//       if (this.pageTitle === 'Persons') {
//         this.loadOtherQuotes(this.listItems[0]); // Assuming the first item is the person
//       } else if (this.pageTitle === 'Quotes') {
//         this.loadOtherRandomQuotes();
//       }
//     },
//   },
//   mounted() {
//     this.loadQuotes(); // Load default content on page load
//   },
// };




</script>

<style>
.custom_app{
  background-color: #BEB8AF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

  
  /* margin-top: 60px; */
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

router-view {
  padding: 20px;
}
</style>