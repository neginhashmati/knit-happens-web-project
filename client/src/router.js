import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Account from './views/Account.vue'
import Login from './views/Login.vue'
import Projects from './views/Projects.vue'
import SpecificProject from './views/SpecificProject.vue'
import Users from './views/Users.vue'
import About from './views/About'
import LoggedOut from './views/LoggedOut'
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
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/loggedout',
      name: 'loggedout',
      component: LoggedOut
    },
    {
      path: '/deleteusers',
      name: '/deleteusers',
      component: DeleteUsers
    }
  ]
})
