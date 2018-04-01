import Vue from 'vue'
// import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './router';


Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes : routes, 
});

// Vue.use(VueResource);

// Vue.http.options.root = 'https://vuejs-http.firebaseio.com/';
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == 'POST') {
//     request.method = 'PUT';
//   }
//   next(response => {
//     response.json = () => { return {messages: response.body} }
//   });
// });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})