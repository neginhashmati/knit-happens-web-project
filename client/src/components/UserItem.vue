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
    }
  }
}
</script>

<style scoped>
p {
    background-color: #f6be7b;
    font-size: 30px;
    padding: 10px;
    margin-left: inherit;
    margin-bottom: 0px;
}

@media (max-width: 600px) {
  .detail {
    font-size: 16pt;
  }
}

.project {
  font-display: #2D3E4E;
  font-size: 16pt;
  border-top: 2px solid #000000;
}

.projectname {
  font-size: 14pt;
}

.card {
  border-style: solid;
  border-radius: 5px;
  margin-top: 10pt;
  margin-bottom: 10pt;
  color: #2D3E4E;
  border: 2px solid #000000;
}

ul {
    display: inline-block
}
</style>
