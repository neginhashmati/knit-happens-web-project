<template>
  <div class="card">
    <div class="title">
        <div class="user-name">
          <p>{{user.name}}</p>
        </div>
    </div>
      <div class="card-body">
        <p>Projects:</p>
        <div v-for="project in user.projects" v-bind:key="project._id">
        <ul>
          <li>{{project.name}}</li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'user-item',
  props: ['user'],
  methods: {
    displayUser() {
      console.log('display-user with id:' + this.user._id)
    },
    deleteAllUsers() {
      this.$emit('del-users', this.user)
      console.log('del-users')
    }
  }
}
</script>

<style scoped>
.card {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid #000000;
  background-color: white;
  margin-left: 40px;
  margin-right: 40px;
}

.title {
  font-size: 1rem;
  background-color: #f6be7b;
  border-bottom: 2px solid #000000;
}

.user-name {
  font-weight: bold;
}

.card-body {
  grid-template-columns: 75px 150px;
  grid-column-gap: 0px;
  text-align: left;
}

p {
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
  margin: 0px;
  font-size: 1rem;
}

ul {
  text-align: left;
}

@media (max-width: 600px) {
  .card {
    font-size: 1rem;
  }
  p {
    padding: 10px;
  }
}
</style>
