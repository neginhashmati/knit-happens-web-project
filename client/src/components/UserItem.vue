<template>
  <div class="user">
    <p>{{user.name}}</p>
      <div class="project">Projects: </div>
      <br>
    <div v-for="project in user.projects" v-bind:key="project._id">
      <div class="projectname">
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
    }
  }
}
</script>

<style scoped>
p {
    background-color: #E09E50;
    color: #2D3E4E;
    font-size: 16pt;
    padding: 10pt;
}

@media (max-width: 600px) {
  .detail {
    font-size: 16pt;
  }
}

.project {
  font-display: #2D3E4E;
  font-size: 16pt;
}

.projectname {
  font-size: 14pt;
}

.user {
  border-style: solid;
  border-color:  #E09E50;
  border-radius: 5px;
  margin-top: 10pt;
  margin-bottom: 10pt;
  color: #2D3E4E;
}

ul {
    display: inline-block
}
</style>
