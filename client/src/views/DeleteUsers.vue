<template>
  <div class="delete">
    <h3>To delete all users, click here:</h3>
    <b-button variant="danger" v-on:click="deleteAllUsers">Delete All Users</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    },
    deleteAllUsers(id) {
      Api.delete('/users')
        .then(response => {
          console.log(response)
          this.loadAllProjects()
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
