import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'
import KaryaTulisView from '../views/KaryaTulisView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/karya-tulis', name: 'karya-tulis', component: KaryaTulisView },
    { path: '/contact', name: 'contact', component: ContactView }
  ]
})

export default router
