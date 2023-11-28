import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
// import { BootstrapVue } from 'bootstrap-vue';
import '@mdi/font/css/materialdesignicons.css';
// import '@mdi/font/css/materialdesignicons.css';
// import Vuetify from 'vuetify';


const app = createApp(App);
app.use(router);
app.use(vuetify);
// app.use(BootstrapVue);
app.mount('#app');