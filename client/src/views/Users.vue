<template>
    <b-container>
      <p class="red">{{message}}</p>
      <b-row>
        <!-- <b-col cols="7" offset="1" offset-md="2">
          <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
        </b-col> -->
        <b-col cols="15">
          <b-button v-on:click="createUser">Create New Project</b-button>
        </b-col>
        <b-col cols="4">
          <b-button v-on:click="deleteAllUsers">Delete All Projects</b-button>
        </b-col>
      </b-row>
      <h1>My projects:</h1>
      <b-row align-h="center">
        <b-col cols="12" sm="6" md="4" v-for="user in users" v-bind:key="user._id">
            <project-item v-bind:project="users" v-on:del-project="deleteUser"/>
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
    deleteUser(id) {
      Api.delete(`/users/${id}`)
        .catch(error => {
          console.error(error)
        })
    },
    createUser() {
      console.log(this.text)
      Api.post('/users')
        .catch(error => {
          console.error(error)
        })
    },
    deleteAllUsers() {
      console.log(this.text)
      Api.delete('/users')
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>
