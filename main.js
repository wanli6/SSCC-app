import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

import uView from '@/uview-ui';
Vue.use(uView);

Vue.prototype.users = [
	{
		username: 'wanli',
		password: 'Wl123456',
	},
	{
		username: 'wangmazi',
		password: 'Wangmazi123',
	}
];

Vue.prototype.isOld = true
// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
