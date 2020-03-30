import 'babel-polyfill';
import Vue from 'vue';
import './global-components';
import AppLayout from './components/AppLayout.vue';
import router from './router';
import VueFetch from './plugins/fetch';
import state from './state';
import VueState from './plugins/state';


Vue.use(VueFetch, {
	baseUrl: 'http://localhost:3000/'
});

Vue.use(VueState, state);

new Vue({
	el: '#app',
	data: state,
	render: h => h(AppLayout),
	router
});