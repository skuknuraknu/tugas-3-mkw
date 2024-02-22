import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/Pertemuan1/components/DocsExample'

import BootstrapVue3 from 'bootstrap-vue-3'
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'

import '@/assets/style.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)
app.use(BootstrapVue3)
// app.use(VueSlider)

app.mount('#app')
