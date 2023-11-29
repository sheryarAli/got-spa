// src/plugins/vuetify.js

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const myCustomLightTheme = {
    options: {
        customProperties: true,
    },
    dark: false,
    colors: {
        background: () => url('https://c.animaapp.com/cuCqTOMO/img/untitled-2.png'),
        // background: '#BEB8AF',
        // surface: '#BEB8AF',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

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
