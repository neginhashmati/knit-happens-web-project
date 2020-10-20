<template>
<div class="login-page">
      <transition name="fade">
         <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
          <div id="login-logo">
            <img src="../assets/loginlogo.png" class="col-lg-4 col-md-6 col-sm-8 mx-auto" alt="Logo">
          </div>
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                  <h1>Log In</h1>
                  <form v-on:submit.prevent class="form-group">
                     <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn btn-primary" @click="doLogin">
                     <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Create account here</a>
                     </p>
                  </form>
               </div>

               <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                  <h1>Create Account</h1>
                  <form class="form-group">
                     <input v-model="nameReg" type="name" class="form-control" placeholder="Name" required>
                     <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                     <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                     <input type="submit" class="btn btn-primary" @click="doRegister">
                     <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Log in here</a>
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
      emptyFields: false,
      nameReg: '',
      passwordReg: '',
      confirmReg: '',
      emailReg: ''
    }
  },

  mounted() {
    if (!localStorage.userID) {
      localStorage.userID = ''
    }
  },
  methods: {
    doLogin() {
      if (this.emailLogin === '' || this.passwordLogin === '') {
        this.emptyFields = true
      } else {
        Api.get('/auth/?email=' + this.emailLogin + '&password=' + this.passwordLogin)
          .then(response => {
            if (typeof response.data.error !== 'undefined') {
              alert(response.data.error)
              this.user = null
            } else {
              this.user = response.data
              console.log('AND THEN')
              localStorage.userName = this.user.name
              localStorage.userID = this.user._id
              document.location.href = '/home'
            }
          })
      }
    },

    doRegister() {
      if (this.emailReg === '' || this.passwordReg === '' || this.confirmReg === '') {
        this.emptyFields = true
      } else {
        if (this.confirmReg !== this.passwordReg) {
          alert('Your passwords do not match')
        } else {
          Api.post('/users', {
            email: this.emailReg,
            password: this.passwordReg,
            name: this.nameReg,
            projects: [],
            materials: []
          })
            .then((response) => {
              localStorage.userName = response.data.name
              localStorage.userID = response.data._id
              document.location.href = '/home'
            }, (error) => {
              console.log(error)
            })
        }
      }
    }
  }
}
</script>

<style scoped>

.grey-box {
  background-color: #E8ECEB;
}

p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

#login-logo {
  align-items: center;
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
