import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css'
import router from './router/index';

import axios from 'axios';
window.axios = axios;

const vuetify = createVuetify({
    components,
    directives,
  })

import './assets/css/base.css';
//carousel
import VueSplide from '@splidejs/vue-splide';

//tu dong dinh kem token len header
axios.interceptors.request.use(request => {
const token = window.localStorage.getItem('token');
  if (token) {
    request.headers.token = `Bearer ${token}`;
   
  }
  return request;
});
//
const app = createApp( App );
app.use(router);
app.use(vuetify);
app.use( VueSplide );

app.mount( '#app' );



