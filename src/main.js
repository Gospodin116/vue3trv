import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './routes'
import store from './store'

const app = createApp(App)
app.use(router).use(store);

app.mount('#app')
