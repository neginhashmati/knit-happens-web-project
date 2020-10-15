<template>
    <div class="logout spacing">
      <div class="spacing">
      <img src="../assets/cat-with-yarn.png" alt="Naughty kitten tangled in yarn">
      </div>
      <div>
        <div id="logout-button" class="spacing" @click="doLogout">Log me out
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
    doLogout() {
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
  margin: auto;
  cursor: pointer;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  background-color: #f6be7b;
  padding-top: 7px;
}

#logout-button:hover {
  background-color: #E09E50;
}

</style>
