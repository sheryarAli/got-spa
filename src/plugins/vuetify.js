// src/plugins/vuetify.js

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const myCustomLightTheme = {
    options: {
        customProperties: true,
    },
    dark: true,
    
}

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        },
      },

    ssr: true,
    components,
    directives,
});
