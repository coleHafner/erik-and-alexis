// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Materials from 'vue-materials';
import Vue from 'vue';
import router from './router';
import App from './App';

Vue.config.productionTip = false;
Vue.use(Materials);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
});
