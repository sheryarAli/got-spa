<template>
    <v-app>
      <!-- Header -->
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Game of Thrones</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="toggleTheme">
          <v-icon>{{ darkTheme ? 'mdi-white-balance-sunny' : 'mdi-brightness-3' }}</v-icon>
        </v-btn>
      </v-app-bar>
  
  
      <!-- Footer -->
      <v-footer app>
        <v-container>
          <v-row>
            <v-col>
              <v-spacer></v-spacer>
              <div class="footer-text">
                &copy; 2023 Game of Thrones
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        darkTheme: false,
      };
    },
    methods: {
      toggleTheme() {
        this.darkTheme = !this.darkTheme;
        this.$vuetify.theme.dark = this.darkTheme;
      },
    },
  };
  </script>
  
  <style>
  .footer-text {
    color: #fff;
  }
  </style>
  