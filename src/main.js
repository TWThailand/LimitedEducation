// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/app.scss'
import './css/detail.scss'
import './css/voteViaFacebookForm.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#home',
  router,
  components: { App },
  template: '<App/>'
})
