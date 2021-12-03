import Vue from 'vue'
import App from './components/App'
import Router from 'vue-router'
import i18n from '~/user/plugins/i18n'
import '~/user/plugins'
import store from '~/user/store'
import router from '~/user/router'
import '~/user/components'
import * as $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap'
import Iconly from "vue-iconly";
import Swal from 'sweetalert2'

// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
Vue.prototype.$cost = function (number) {
  return new Intl.NumberFormat('ru-RU').format(Math.ceil(number))
};

Vue.prototype.$Swal = Swal
Vue.use(Iconly);
Vue.use(Router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
