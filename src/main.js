import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import EN from './i18n/en';
import ZH from './i18n/zh'
import { getLanguage } from './i18n'

const app = createApp(App)
app.config.globalProperties.$t = (key) => {
    const lang = getLanguage();
    const translations = lang === 'en' ? EN : ZH;
    return translations[key] || key;
  };

app.use(createPinia())
    .use(ElementPlus)
app.mount('#app')
