// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard.vue"
import Slideshow from "../views/Slideshow.vue"

const routes = [
  {
    path: "/dashboard/:dashboardId",
    name: "Dashboard",
    component: Dashboard,
    props: true
  },
  {
    path: "/slideshow",
    name: "Slideshow",
    component: Slideshow,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
