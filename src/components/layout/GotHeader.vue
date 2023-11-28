<template>
<header class="header">
    <div class="container text-center">
        <span class="custom-title">Game of Thrones</span>
    </div>
  </header>
      <!-- <v-app-bar app color="primary" dark> -->
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <!-- <v-app-bar-title class="max-auto">Game of Thrones</v-app-bar-title> -->
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-btn icon @click="toggleTheme">
        <v-icon>{{ darkTheme ? 'mdi-white-balance-sunny' : 'mdi-brightness-3' }}</v-icon>
      </v-btn> -->
    <!-- </v-app-bar> -->
</template>


<script>
// export default {
//   data() {
//     return {
//       drawer: false,
//       darkTheme: false,
//     };
//   },
  
// };
</script>

<style>


.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #331C0E; /* Dark background for the header */
  color: #fff; /* White text color */
}
.header span {
  margin: 0;
  font-size: 1.5em; /* Larger font size for the header title */
}

.custom-title {
    font-size: larger; /* Makes the text larger */
  display: block; /* Ensures the text is centered */
}

.game-of-thrones {
  background-color: #1B1B1B; /* Dark background color */
}

</style>