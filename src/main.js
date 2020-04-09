import 'babel-polyfill';
import Vue from 'vue';
import './global-components';
import AppLayout from './components/AppLayout.vue';
import router from './router';
import VueFetch, { $fetch } from './plugins/fetch';
import state from './state';
import VueState from './plugins/state';
import * as filters from './filters';

for (const key in filters) {
	Vue.filter(key, filters[key]);
}

Vue.use(VueFetch, {
	baseUrl: 'http://localhost:3000/'
});

Vue.use(VueState, state);


async function main() {

	try {
		state.user = await $fetch('user');		
	}
	catch (e) {
		console.warn(e);
	}

	new Vue({
		el: '#app',
		data: state,
		render: h => h(AppLayout),
		router
	});
}


main();
