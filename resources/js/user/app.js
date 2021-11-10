import Vue from 'vue'
import App from './components/App'
import Router from 'vue-router'
import i18n from '~/user/plugins/i18n'
import '~/user/plugins'
import store from '~/user/store'
import router from '~/user/router'
import '~/user/components'
import 'bootstrap'

// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

Vue.use(Router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
