<template>
    <b-container>
      <p class="red">{{message}}</p>
      <h1>See what the community is up to!</h1>
      <br>
      <p><b-button size="sm">
          <b-icon icon="sort-alpha-down" @click="sortAlpha = !sortAlpha, loadAllUsers(sortAlpha)"></b-icon>
        </b-button> Sort users alphabetically
        </p>
      <b-row align-h="center">
        <b-col cols="12" sm="6" md="6" lg="6" v-for="user in users" v-bind:key="user._id">
          <user-item v-bind:user="user" v-on:display-user="displayUser"/>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import { Api } from '@/Api'
import UserItem from '@/components/UserItem.vue'

export default {
  name: 'explore',
  components: {
    UserItem
  },
  mounted() {
    console.log('PAGE is loaded')
    // Load the real users from the server
    this.loadAllUsers()
  },
  data() {
    return {
      users: [],
      message: '',
      text: '',
      userID: localStorage.userID,
      projects: [],
      sortAlpha: false
    }
  },
  methods: {
    displayUser(id) {
      Api.get('users/' + `${id}` + '/projects')
        .catch(error => {
          console.error(error)
        })
    },
    /* loadAllUsers() {
      Api.get('/users')
        .then(response => {
          this.users = response.data.users
          console.log('loaded user', this.users)
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.users = []
          // TODO: display error message
        })
        .then(() => {
          //   This code is always executed at the end. After success or failure.
        })
    } */
    loadAllUsers(sortAlpha) {
      console.log('sortAlpha is ' + this.sortAlpha)
      if (this.sortAlpha === false) {
        Api.get('/users')
          .then(response => {
            this.users = response.data.users
            console.log('loaded user', this.users)
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
            this.users = []
            // TODO: display error message
          })
          .then(() => {
            //   This code is always executed at the end. After success or failure.
          })
      } else if (this.sortAlpha === true) {
        Api.get('/users?sort=name')
          .then(response => {
            this.users = response.data.users
            console.log('loaded user', this.users)
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
            this.users = []
            // TODO: display error message
          })
          .then(() => {
            //   This code is always executed at the end. After success or failure.
          })
      }
    }
  }
}
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 1rem;
}
</style>
