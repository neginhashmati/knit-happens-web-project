<template>
  <div class="card">
    <p>{{user.name}}</p>
      <div class="project">Projects: </div>
      <br>
    <div v-for="project in user.projects" v-bind:key="project._id" class="projectname">
        <ul>
          <li>{{project.name}}</li>
        </ul>
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
p {
    background-color: #f6be7b;
    font-size: 2rem;
    padding: 10px;
    margin-left: inherit;
    margin-bottom: 0px;
}

@media (max-width: 600px) {
  .card {
    font-size: 1rem;
  }
}

.project {
  font-size: 1.5rem;
  border-top: 2px solid #000000;
}

.projectname {
  font-size: 1rem;
}

.card {
  border-style: solid;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid #000000;
}

ul {
  text-align: left;
}
</style>
