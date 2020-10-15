<template>
    <div class="col-12 col-md-12 col-xl-12 logout spacing">
      <div class="col-12 col-md-12 col-xl-12 spacing">
      <img src="../assets/cat-with-yarn.png" alt="Naughty kitten tangled in yarn">
      </div>
      <div class="col-12 col-md-12 col-xl-12 spacing">
        <div id="logout-button" @click="doLoggout">Log me out
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'logout',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    doLoggout() {
      localStorage.userID = null
      localStorage.userName = null
      alert('You are now logged out \nSee you again soon!')
      document.location.href = '/'
    }
  }
}
</script>

<style scoped>

.spacing {
  margin: 100px;
  align-content: center;
}

#logout-button {
  cursor: pointer;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  background-color: #f6be7b;
  padding-top: 7px;
}
</style>
