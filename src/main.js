import Vue from 'vue'
 import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './router';
import store from './store/store';


Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes : routes, 
});

Vue.use(VueResource);

Vue.http.options.root = 'https://simpletradeapp.firebaseio.com/';
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == 'POST') {
//     request.method = 'PUT';
//   }
//   next(response => {
//     response.json = () => { return {messages: response.body} }
//   });
// });

Vue.filter('currency', (value) => {
	return '£' + value.toLocaleString();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
