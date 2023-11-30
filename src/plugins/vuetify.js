// src/plugins/vuetify.js

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';



export default createVuetify({
    theme: false,
    // theme: {
    //     options: {
    //         customProperties: true,
    //     },
        // background: url('https://c.animaapp.com/cuCqTOMO/img/untitled-2.png'),
        // defaultTheme: 'myCustomLightTheme',
        // themes: {
        //     myCustomLightTheme,
        // },
    // },

    ssr: true,
    components,
    directives,
});
