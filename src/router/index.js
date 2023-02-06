import { createRouter, createWebHistory } from 'vue-router'
import ClockView from '../views/Clock.vue'
import AlarmView from '../views/Alarm.vue'
import TimerView from '../views/Timer.vue'
import StopwatchView from '../views/Stopwatch.vue'
import NotesView from '../views/Notes.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: ClockView
  },
  {
    path: '/clock',
    name: 'clock',
    component: ClockView
  },
  {
    path: '/alarm',
    name: 'alarm',
    component: AlarmView
  },
  {
    path: '/timer',
    name: 'timer',
    component: TimerView
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: StopwatchView
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
