import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrackerView from '../views/TrackerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/melee',
    name: 'melee',
    component: TrackerView
  },
  {
    path: '/ranged',
    name: 'ranged',
    component: TrackerView
  },
  {
    path: '/mage',
    name: 'mage',
    component: TrackerView
  },
  {
    path: '/summoner',
    name: 'summoner',
    component: TrackerView
  },
  {
    path: '/bosses',
    name: 'bosses',
    component: TrackerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
