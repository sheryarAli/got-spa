<template>
  <!-- <div id="app"> -->

  <div>
    <v-app>
      <!-- <v-btn @click="toggleTheme">toggle theme</v-btn> -->


     


      <Header />


      <v-container id="container">
        <router-view />

      </v-container>

      

      <Footer />
    </v-app>
  </div>
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








</script>



<style>
.custom_app {
  /* background-color: #BEB8AF; */
  background: url('https://c.animaapp.com/cuCqTOMO/img/untitled-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#app {

  background: url('https://c.animaapp.com/cuCqTOMO/img/untitled-2.png');
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;



}
#container{

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