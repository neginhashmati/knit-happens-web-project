import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import Account from './views/Account.vue'
import CreateAccount from './views/CreateAccount.vue'
import Login from './views/Login.vue'
import Projects from './views/Projects.vue'
import SpecificProject from './views/SpecificProject.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/createaccount',
      name: 'createaccount',
      component: CreateAccount
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
      path: '/specificproject',
      name: 'specificproject',
      component: SpecificProject
    }
  ]
})
