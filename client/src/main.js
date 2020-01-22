import Vue from 'vue';
import VueApollo from 'vue-apollo'
import App from './App.vue';
import router from './router.js';
import apolloClient from './lib/apolloClient';
import store from './store/index';

Vue.config.productionTip = false
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
	router,
	store,
	apolloProvider,
	render: h => h(App),
}).$mount('#app')
