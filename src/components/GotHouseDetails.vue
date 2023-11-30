<template>
    <div v-if="!isLoaded">
        Loading...
    </div>
    <div v-else>
        <br>
        <br>

        <h2>{{ house }} </h2>
        <br>

        <h3>Members</h3>
   


        <v-list class="transparent-card2">
            <v-list-item v-for="member in members" :key="member.url">

                <p> {{ member }} </p>

            </v-list-item>
        </v-list>
    </div>
</template>
  
<script>
import { getHouseDetailsByName } from '@/services/gotService';

export default {
    computed: {
        isLoaded() {
            return this.house && this.members.length > 0;
        }
    },
    data() {
        return {
            house: {},
            members: [],
        };
    },
    async mounted() {
   
        const houseName = this.$route.params.name;
        const response = await getHouseDetailsByName(houseName);
        const membersNames = response.house[0].members.map(member => member.name);

        this.house = response.house[0].name;
        this.members = membersNames;

    },
};
</script>
  
<style scoped>
.custom_p2{
    font-size: 4 rem;
}

</style>
  