<template>
  <div id="app">







    <Header />


    <v-container id="container">
      <router-view />

    </v-container>



    <Footer />


  </div>
</template>




<script>


import Footer from '@/components/layout/GotFooter.vue';
import Header from '@/components/layout/GotHeader.vue';
import './styles/main.css';



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









</script>



<style>
.flex-container {
  flex-grow: 1;
  /* Ensure the page takes up at least the full viewport height */
}

.custom_app {
  /* background-color: #BEB8AF; */
  background: url('https://c.animaapp.com/cuCqTOMO/img/untitled-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;




}

#container {

  max-width: 860px;
  padding: 8px;
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