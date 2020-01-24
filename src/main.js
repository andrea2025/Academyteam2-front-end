import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresGuest)) {
    if (!store.getters.isLoggedIn) {
      next('/userlogin')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (!store.getters.isLoggedIn) {
      next('/adminlogin')
    } else {
      next()
    }
  } else {
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')