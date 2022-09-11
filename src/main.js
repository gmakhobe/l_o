import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './TodoListApp.vue'
import TodoListApp from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

import './assets/style.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: TodoListApp,
    },
    {
      path: "/About",
      name: "About",
      component: AboutView
    }
  ]
});

app.use(createPinia())
app.use(router)

app.mount('#app')