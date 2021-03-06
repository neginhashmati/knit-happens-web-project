import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Account from './views/Account.vue'
import Login from './views/Login.vue'
import Projects from './views/Projects.vue'
import SpecificProject from './views/SpecificProject.vue'
import SpecificNeedle from './views/SpecificNeedle.vue'
import SpecificYarn from './views/SpecificYarn.vue'
import Explore from './views/Explore.vue'
import About from './views/About'
import Logout from './views/Logout'
import DeleteUsers from './views/DeleteUsers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/home',
      name: 'home',
      component: Home
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
      path: '/specificneedle/:id',
      name: 'specificneedle',
      component: SpecificNeedle
    },
    {
      path: '/specificyarn/:id',
      name: 'specificyarn',
      component: SpecificYarn
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/deleteusers',
      name: '/deleteusers',
      component: DeleteUsers
    }
  ]
})
