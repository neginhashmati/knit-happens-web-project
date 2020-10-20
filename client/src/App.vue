<template>
  <div id="app">

    <div id="top-nav">
      <b-navbar >
        <b-navbar-brand ref="#">
          <img src="./assets/knithappenslogoDARK2.png" class="d-inline-block align-top" alt="Logo" width="40" height="40">Knit Happens
        </b-navbar-brand>

    <!-- <b-navbar-nav class="d-md-flex d-block flex-row mx-md-auto mx-0"> -->
    <b-navbar-nav class=".mx-auto d-block flex-row mx-md-auto mx-0">
      <router-link to="/home">Home</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/explore">Explore</router-link> |
      <router-link to="/account">Account</router-link>
      </b-navbar-nav>

      <b-navbar-nav class="d-block ml-auto">
        <router-link to="/">Log In</router-link> |
        <router-link to="/logout">Log Out</router-link>
      </b-navbar-nav>
      </b-navbar>
    </div>

     <!-- Render the content of the current page view -->
    <div class="view-wrapper"><router-view/></div>

    <div id="bottom-nav">
      <b-navbar variant="dark" type="dark" >

        <b-navbar-nav class="ml-auto">
          <a href="https://git.chalmers.se/courses/dit341/2020/group-23-web">GitLab Repository </a> |
           <router-link to="/about">About Us</router-link>
       </b-navbar-nav>

      </b-navbar>
    </div>

  </div>
</template>

<style scoped>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background-color: #bddbda;

}
.view-wrapper {
  background-color:#E8ECEB;
  min-height: 82vh;

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
#bottom-nav {
  width: 100%;
}

.routerLink{
     text-decoration: none;
 }

</style>
