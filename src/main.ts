import { createApp } from 'vue'
import App from './App.vue'

import "../index.css"
import './assets/iconfont.css';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(ElementPlus).mount('#app')

import "./store/listener"