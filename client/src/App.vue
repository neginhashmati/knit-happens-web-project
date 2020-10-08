<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="login/">Login Page</router-link> |
      <router-link to="projects/">Projects</router-link> |
      <router-link to="users/">Users</router-link> |
      <router-link to="account/">Account</router-link> |
      <router-link to="about/">About</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

</style>
