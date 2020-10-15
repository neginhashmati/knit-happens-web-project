<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login Page</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

  <div id="app">
    <div id="nav">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand ref="#">
       <img src="./assets/knithappenslogoDARK2.png" class="d-inline-block align-top" alt="Logo" width="40" height="40">
      Knit Happens
    </b-navbar-brand>

    <b-navbar-nav class="d-md-flex d-block flex-row mx-md-auto mx-0">
      <router-link to="/home">Home</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link to="/about">About</router-link>
      </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <router-link to="/loggedout">Logout</router-link>
    </b-navbar-nav>

      </b-navbar>
    </div>

    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-display: #000000;
  background-color: #E8ECEB;
}

.navbar.navbar-dark.bg-dark {
    background-color: #bddbda!important;
 }

 a {
  color: black;
}
a:hover {
   color: black
}

</style>
