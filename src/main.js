// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 
import Vuelidate from 'vuelidate'
// import socketio from 'socket.io-client'
// import VueSocketio from 'vue-socket.io'

// export const SocketInstance = socketio(`http://localhost:3000`);

Vue.config.productionTip = false
Vue.use(Vuelidate)
// Vue.use(VueSocketio, socketio(`http://localhost:3000`));







// const socket = io.connect('http://localhost:3000')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
