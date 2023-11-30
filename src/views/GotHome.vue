// Home.vue
<template>
  <div>





  <!-- <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/houses">Houses</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/people">Persons</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/quotes">Quotes</router-link>
        </li>
      </ul>
            </nav> -->


    <v-card>
      <v-card-title class="text-center justify-center py-6">
      <!-- <h1 class="font-weight-bold text-h2 text-basil">
          BASiL
              </h1> -->
      </v-card-title>

      <v-tabs v-model="tab" grow>
        <v-tab v-for="route in routes" :key="route.name" :to="{ name: route.name }">
          {{ route.name }}
          <!-- <router-link to="/houses">Houses</router-link> -->
        </v-tab>
      </v-tabs>

      <v-window v-model="tab">

        <router-view />
      <!-- <v-window-item v-for="item in items" :key="item" :value="item">
          <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
          </v-card>
            </v-window-item> -->
      </v-window>
    </v-card>





  </div>
</template>

<script>

import { useRoute, useRouter } from 'vue-router';


export default {
  name: 'Main_Home',

  setup() {




    const currentRoute = useRoute();
    const router = useRouter();
    const uniqueRouteNames = new Set();
    let activeTab = 'Houses';

    const flattenRoutes = (routes) => {
      return routes.reduce((result, route) => {
 
        if (!uniqueRouteNames.has(route.name)) {
          result.push(route);
          uniqueRouteNames.add(route.name);
        }
        if (route.children) {
          result.push(...flattenRoutes(route.children));
        }
        return result;
      }, []);
    };

    const allRoutes = flattenRoutes(currentRoute.matched);
    const filteredRoutes = allRoutes.filter(route =>
      ['Houses', 'People', 'Quotes'].includes(route.name)
    );

    router.push({ name: activeTab });

    return {
      routes: filteredRoutes,
      activeTab,
    };
  },

  data() {
    return {
      tab: 'Appetizers',
      items: [
        'houses', 'peoples', 'quotes',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },





};
</script>


<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  /* background-color: #331C0E; */
  padding: 1rem;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-item a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

/* Styles to indicate the active link */
.router-link-active {
  color: #4CAF50;
}

.router-link-exact-active {
  color: #4CAF50;
}
</style>

<!-- <style scoped>
/* Add component-specific styles here */
nav {
  background-color: #333;
  padding: 10px;
}

router-link {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style> -->