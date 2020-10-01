import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Account from './views/Account.vue'
import Login from './views/Login.vue'
import Projects from './views/Projects.vue'
import SpecificProject from './views/SpecificProject.vue'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/specificproject/:id',
      name: 'specificproject',
      component: SpecificProject
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
