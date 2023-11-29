// Home.vue
<template>
  <div>


    <nav class="navbar">
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
    </nav>










  <!-- <nav>
      <router-link to="/houses">Houses</router-link>
      <router-link to="/people">People</router-link>
      <router-link to="/quotes">Quotes</router-link>
      </nav> -->
    <router-view />
  <!-- <House />
    <Person />
      <Quote /> -->
  </div>
</template>

<script>
// import House from '@/components/GotHouse.vue';
// import Person from '@/components/GotPerson.vue';
// import Quote from '@/components/GotQuote.vue';

export default {
  name: 'Main_Home',

  // components: {
  //   House,
  //   Person,
  //   Quote,
  // },
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