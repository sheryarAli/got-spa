// Home.vue
<template>
  <div>


    <v-card class="transparent-card">
      <v-card-title class="text-center justify-center py-6">
      <!-- <h1 class="font-weight-bold text-h2 text-basil">
          BASiL
              </h1> -->
      </v-card-title>

      <v-tabs  grow>
        <v-tab v-for="route in routes" :key="route.name" :to="{ name: route.name }">
          <p >{{ route.name }}</p>
         
        </v-tab>
      </v-tabs>

      <v-window >

        <router-view />
     
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
    let activeTab = 'People';

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


};
</script>


<style scoped>

.transparent-card {
    background-color: rgba(255, 255, 255, 0.1); /* White with 50% opacity */
}
</style>

