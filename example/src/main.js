// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueElastic from 'vue-elasticsearch'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-elasticsearch/dist/vue-elasticsearch.css'

import store from './store'
import App from './App'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(VueElastic, {
  suggest: {
    host: 'http://localhost:8000',  // @todo localhost symfony transformer
    index: 'test',
    type: 'suggestions'
  },
  search: {
    host: 'http://localhost:9200',  // @todo direct es connection, test localhost=elasticsearch
    index: 'test',
    type: 'tags'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
