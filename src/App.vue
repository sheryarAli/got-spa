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

.custom_app {

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


router-view {
  padding: 20px;
}
</style>