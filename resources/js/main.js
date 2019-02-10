window.Vue = require('vue');
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
 
require('./bootstrap');

 
Vue.use(VeeValidate);

const app = new Vue({
    el: '#app',
	router,
	render: h => h(App)
}).$mount("#app");
	