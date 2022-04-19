
// import VueRouter from 'vue-router';
// import '@mdi/font/css/materialdesignicons.css';
// import HeaderComponent from "./components/HeaderComponent";

// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';
// import '@mdi/font/css/materialdesignicons.css';

// // require('./bootstrap');

// // window.Vue = require('vue');

// Vue.use(Vuetify);

// // Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('header-component', HeaderComponent);

// const app = new Vue({
//     el: '#app',
//     router,
//     vuetify: new Vuetify({
//         icons: {
//             iconfont: 'mdi',
//         },
//     })
// });
require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import HeaderComponent from "./components/HeaderComponent";
Vue.use(Vuetify);
Vue.component('header-component', HeaderComponent);


const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi',
        },
    })
});
