<template>
    <b-container>
      <p class="red">{{message}}</p>
      <h1>See what the community is up to!</h1>
      <br>
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
  name: 'users',
  components: {
    UserItem
  },
  mounted() {
    console.log('PAGE is loaded')
    // Load the real users from the server
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
  },
  data() {
    return {
      users: [],
      message: '',
      text: '',
      userID: localStorage.userID,
      projects: []
    }
  },
  methods: {
    displayUser(id) {
      Api.get('users/' + `${id}` + '/projects')
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
h1 {
  color: #2D3E4E;
}
.red {
    color: red;
}
</style>
