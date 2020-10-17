<template>
  <b-container class="col-12 col-md-10 col-xl-8">
    <h3>Welcome to your account page {{userName}}!</h3>
    <b-container class="inner-box">
      <b-row>
        <b-col class="col-3 col-md-2 col xl-2">
          <p>Change your password</p>
        </b-col>
        <b-col class="col-7 col-md-8 col xl-8">
          <form class="form-inline">
          <input v-model="passwordNew" type="password" class="form-control" placeholder="New Password" required>
          <input v-model="confirmNew" type="password" class="form-control" placeholder="Confirm Password" required>
          <input type="submit" class="btn btn-info" :disabled='isDisabled' @click="changePass">
          </form>
        </b-col>
      </b-row>
    </b-container>
    <p>Are you an admin? Click here to go to the 'delete all users' page:</p>
    <b-button size="sm" b-link v-bind:to="'deleteusers'">Delete All Users</b-button>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'account',
  data() {
    return {
      message: 'none',
      confirmNew: 'none',
      passwordNew: 'none',
      userName: localStorage.userName,
      userID: localStorage.userID,
      loggedIn: true
    }
  },

  mounted() {
    if (localStorage.userID === '') {
      alert('You are not logged in.\nYou are being diverted to the login page!')
      document.location.href = '/'
    }
  },

  methods: {
    changePass() {
      if (this.confirmNew !== this.passwordNew) {
        alert('Your passwords do not match.')
      } else {
        Api.patch('/users/' + localStorage.userID, {
          password: this.passwordNew
        })
          .then((response) => {
            console.log(response)
            alert('PASSWORD IS NOW CHANGED. DON\'T YOU FORGET IT!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style>

  p {
    color: #2D3E4E;
  }

  h3 {
    color: #2D3E4E;
    font-size: 10rem;
    padding: 40rem 10rem 40rem 10rem;
  }

  .inner-box {
    background: white;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    padding: 15rem 5rem 15rem 5rem;
    margin-left: 10rem;
    margin-right: 10rem;
  }

  @media (max-width: 600px) {
    .inner-box {
      padding: 2rem 1rem 2rem 1rem;
    }
  }
</style>
