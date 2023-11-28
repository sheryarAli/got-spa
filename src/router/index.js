import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/GotHome.vue';
import Houses from '@/components/GotHouse.vue';
import People from '@/components/GotPerson.vue';
import Quotes from '@/components/GotQuote.vue';
import HouseDetails from '@/components/GotHouseDetails.vue';
import PersonDetails from '@/components/GotPersonDetails.vue';
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
// ];

const routes = [
    {
        path: '/',
        redirect: '/Home',
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        children: [

            {
                path: '/houses',
                name: 'Houses',
                component: Houses,
            },
            {
                path: '/people',
                name: 'People',
                component: People,
            },
            {
                path: '/quotes',
                name: 'Quotes',
                component: Quotes,
            },
            {
                path: '/houses/:name',
                name: 'HouseDetails',
                component: HouseDetails,
            },
            {
                path: '/people/:name',
                name: 'PersonDetails',
                component: PersonDetails,
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;