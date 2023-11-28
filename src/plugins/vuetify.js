// src/plugins/vuetify.js

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';



export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                customColor: '#BEB8AF', // custom color
            },
        },
    },

    ssr: true,
    components,
    directives,
});
