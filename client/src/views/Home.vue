<template>
  <div class="home">
    <h1>Welcome to Knit Happens!</h1>
     <img src="../assets/knithappenslogoDARK2.png" alt="Logo" width="200" height="200">
    <p>Knit Happens is your new favorite website for keeping track of and organizing your knitting projects.</p>
    <p>Create a new project, add the yarns and needles you need to it, track your progress.</p>
    <p>Create anything you can imagine.</p>
    <br>
    <div class="buttons">
        <div id="logout-button">
          <router-link to="/projects">See your projects</router-link>
        </div>
        <br>
        <div id="logout-button">
          <router-link to="/account">Go to your account</router-link>
        </div>
    </div>
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
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1rem;
}

.home {
  padding: 20px 10px 20px 10px;
}

@media (max-width: 600px) {
  .home {
    padding: 20px 10px 20px 10px;
  }
}

#logout-button {
  margin: auto;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: 2px solid black;
  background-color: #f6be7b;
  padding-top: 7px;
  color: black;
}

#logout-button:hover {
  background-color: #E09E50;
}

a {
  color: black;
}

a:hover {
   color: black
}
</style>
