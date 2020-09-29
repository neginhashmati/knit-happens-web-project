import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import Account from './views/Account.vue'
import CreateAccount from './views/CreateAccount.vue'
import Login from './views/Login.vue'
import ProjectOverview from './views/ProjectOverview.vue'
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
      path: '/',
      name: 'account',
      component: Account
    },
    {
      path: '/',
      name: 'createaccount',
      component: CreateAccount
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'projectoverview',
      component: ProjectOverview
    },
    {
      path: '/',
      name: 'specificproject',
      component: SpecificProject
    }
  ]
})
