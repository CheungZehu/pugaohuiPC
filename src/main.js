// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store/store'




Vue.use(ElementUI)
Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: 'zh',
	messages: {
		'zh': require('./components/common/zh'),
		'en': require('./components/common/en')
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	i18n,
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
