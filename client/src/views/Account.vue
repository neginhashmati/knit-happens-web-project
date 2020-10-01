<template>
  <div class="shy-box">
    <img src="../assets/cat-with-yarn.png"><br/>
    <div><p><h2>Welcome to your account page</h2>
    </div>

  <p>Change your password here:</p>
  <form class="form-group">
      <input v-model="passwordNew" type="password" class="form-control" placeholder="New Password" required>
      <input v-model="confirmNew" type="password" class="form-control" placeholder="Confirm Password" required>
      <input type="submit" class="btn btn-info" @click="changePass">
  </form>

  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'account',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    changePass() {
      if (this.confirmNew !== this.passwordNew) {
        alert('Your passwords do not match')
      } else {
        Api.patch('/users/' + localStorage.userID, {
          password: this.passwordNew
        })
      }
    }
  }
}
</script>

<style>

  h2 {
    color: #2D3E4E;
  }

  .bold-box {
    color: #2D3E4E;
  }

  .shy-box {
    background: #8CBDB9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4em 4em 4em 4em;
    margin: 4em 4em 4em 4em;
  }
</style>
