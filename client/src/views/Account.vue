<template>
  <b-container class="col-12 col-md-10 col-xl-8 light-box">
    <img src="../assets/cat-with-yarn.png">
    <h3>Welcome to your account page {{userName}}!</h3>
    <b-container class="inner-box">
      <b-row>
        <b-col class="col-3 col-md-2 col xl-2">Change your password
        </b-col>
        <b-col class="col-6 col-md-7 col xl-5">
          <form class="form-group">
          <input v-model="passwordNew" type="password" class="form-control" placeholder="New Password" required>
          <input v-model="confirmNew" type="password" class="form-control" placeholder="Confirm Password" required>
          <input type="submit" class="btn btn-info" @click="changePass">
          </form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-7 col-md-7 col xl-7">
       To delete your account and all projects, click here:
        </b-col>
        <b-col h-align ="end" class="col-2 col-md-2 col xl-2">
        <b-button variant="danger" v-on:click="deleteAllProjects">Delete Account</b-button>
        </b-col>
      </b-row>
    </b-container>
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
      userID: localStorage.userID
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
          .then((response) => {
            console.log(response)
            alert('PASSWORD IS NOW CHANGED. DON\'T YOU FORGET IT!')
          }, (error) => {
            console.log(error)
          })
      }
    }
    /* deleteUser(UserID) {
      UserID =
      Api.delete(`/user/${userID}`)
        .catch(error => {
          console.error(error)
        })
    } */
  }
}
</script>

<style>

  h3 {
    color: #2D3E4E;
    font-size: 12px;
    padding: 40px 10px 40px 10px;
  }

  .bold-box {
    color: #2D3E4E;
  }

  .light-box {
    background: #8CBDB9;
   /* display: flex;*/
    justify-content: center;
    align-items: center;
    padding: 4em 4em 4em 4em;
    margin: 4em 4em 4em 4em;
  }

  .inner-box {
    background: white;
    justify-content: center;
    align-items: center;
    padding: 10px 0px 10px 0px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
