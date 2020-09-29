<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Landing Page</router-link> |
      <router-link to="login">Login Page</router-link> |
      <router-link to="projects">Projects</router-link> |
      <router-link to="createaccount">Create account</router-link> |
      <router-link to="specificproject">Specific Project</router-link> |
      <router-link to="login">Login Page</router-link> |
      <router-link to="account">Account</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p {
  background-color: orange;
}
</style>
