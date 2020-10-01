<template>
<div class="login-page">
      <transition name="fade">
         <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                  <h1>Sign In</h1>
                  <form v-on:submit.prevent class="form-group">
                     <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn btn-primary" @click="doLogin">
                     <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                     </p>
                  </form>
               </div>

               <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                  <h1>Sign Up</h1>
                  <form class="form-group">
                     <input v-model="nameReg" type="name" class="form-control" placeholder="Name" required>
                     <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                     <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                     <input type="submit" class="btn btn-primary" @click="doRegister">
                     <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
                     </p>
                  </form>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>

<script>
// @ is an alias to /src
// import { Api } from '@/Api'
import { Api } from '@/Api'

export default {
  name: 'login',

  data() {
    return {
      user: null,
      registerActive: false,
      emptyFields: false
    }
  },

  methods: {
    doLogin() {
      if (this.emailLogin === '' || this.passwordLogin === '') {
        this.emptyFields = true
      } else {
        Api.get('/users')
          .then(response => {
            this.user = null
            for (var cnt = 0; cnt < response.data.users.length; cnt++) {
              var element = response.data.users[cnt]
              if (element.email === this.emailLogin) {
                this.user = element
                console.log('FOUND USER')
              }
            }
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
            this.project = []
            // TODO: display error message
          })
          .then(() => {
            console.log('AND THEN')
            if (this.user === null) {
              alert('LOGIN FAILED!! AAAAAA!!!! OMG!!!!!!!11!11!!!oneoneone!!!')
              return
            }
            localStorage.userName = this.user.name
            localStorage.userID = this.user._id
            alert('WELCOME ' + localStorage.userName + '. IT\'S TIME TO MAKE KNIT HAPPEN!! :D')
            document.location.href = '/projects'
          })
      }
    },

    doRegister() {
      if (this.emailReg === '' || this.passwordReg === '' || this.confirmReg === '') {
        this.emptyFields = true
      } else {
        if (this.confirmReg !== this.passwordReg) {
        alert ('Your passwords do not match')
        }
        else {
          api.post('/users', {
          "email": this.emailReg,
          "password": this.passwordReg,
          "name": this.nameReg,
          "projects": [],
          "materials": []
          })
          }       
        alert('You are now registered')
      }
    }
  }
}
</script>

<style>
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group input {
  margin-bottom: 20px;
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}
.login-page .wallpaper-login {
  background: url('../assets/login_background.jpg') no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}
.login-page .fade-enter-active,
.login-page .fade-leave-active {
  transition: opacity .5s;
}
.login-page .fade-enter,
.login-page .fade-leave-to {
  opacity: 0;
}
.login-page .wallpaper-register {
  background: url('../assets/create_account_background.jpg') no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}
.login-page h1 {
  margin-bottom: 1.5rem;
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
