// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard.vue"

const routes = [
  {
    path: "/dashboard/:dashboardId",
    name: "Dashboard",
    component: Dashboard,
    props: true
  }
]

// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default/Default.vue'),
//     children: [
//       {
//         path: '',
//         name: 'Home',
//         component: () => import('@/views/Home.vue'),
//       },
//     ],
//   },
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
