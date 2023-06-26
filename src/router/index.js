import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    name: 'projets',
    path: '/projects',
    component: ProjectsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
