<template>
    <div class="logout spacing">
      <div class="spacing">
      <img src="../assets/logout.png" alt="Naughty kitten tangled in yarn" height="300" width="300" >
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

  mounted() {
    if (localStorage.userID === '') {
      alert('You are not logged in.\nYou are being diverted to the login page!')
      document.location.href = '/'
    }
  },

  methods: {
    doLogout() {
      localStorage.userID = ''
      localStorage.userName = ''
      alert('You are now logged out \nSee you again soon!')
      document.location.href = '/'
    }
  }
}
</script>

<style scoped>

.spacing {
  margin: 10px;
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

@media (max-width: 600px) {
  .spacing {
    align-content: center;
    margin: 10px;
  }
}
</style>
