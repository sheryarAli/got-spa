<template>
    <div>
      <h2>{{ house }} Members</h2>
      <ul>
        <li v-for="member in members" :key="member.slug">{{ member }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { getHouseDetailsByName } from '@/services/gotService';
  
  export default {
    data() {
      return {
        house: {},
        members: [],
      };
    },
    async mounted() {
      // Fetch house details using the name from the route params
      const houseName = this.$route.params.name;
      const response = await getHouseDetailsByName(houseName);
      const membersNames = response.house[0].members.map(member => member.name);
      
      this.house = response.house[0].name;
      this.members = membersNames;
    
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  