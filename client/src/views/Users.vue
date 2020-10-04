<template>
    <b-container>
      <p class="red">{{message}}</p>
      <h1>See what the community is up to!</h1>
      <b-row align-h="center" v-for="user in users" v-bind:key="user._id" class="useritem">
        <b-col cols="12" sm="6" md="4" ><a :href="'/users/' + user._id">{{ user.name }}: {{ user.projects }}</a></b-col>
           <user-item v-bind:user="users" v-on:display-user="displayUser"/>
      </b-row>
    </b-container>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'users',
  components: {

  },
  mounted() {
    console.log('PAGE is loaded')
    // Load the real users from the server
    Api.get('/users')
      .then(response => {
        console.log(response.data)
        this.users = response.data.users
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
      text: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>
