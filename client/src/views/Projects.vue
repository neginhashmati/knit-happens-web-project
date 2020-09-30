<template>
    <div>
        <p class="red">{{message}}</p>
        <b-form-input v-model="text" id="yourname" placeholder="Enter your name"></b-form-input>
        <b-button v-on:click="createProject">Create New Project</b-button>
        <p>Here are my projects:</p>
        <div v-for="project in projects" v-bind:key="project._id">
            <project-item v-bind:project="project" v-on:del-project="deleteProject"/>
        </div>
    </div>
</template>

<script>
import { Api } from '@/Api'
import ProjectItem from '@/components/ProjectItem.vue'

export default {
  name: 'projects',
  components: {
    ProjectItem
  },
  mounted() {
    document.getElementById('yourname').value = localStorage.userName
    console.log('PAGE is loaded')
    console.log(localStorage.userName)
    // Load the real project from the server
    Api.get('/users/' + localStorage.userID + '/projects')
      .then(response => {
        // console.log(response.data)
        this.projects = response.data.projects
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.project = []
        // TODO: display error message
      })
      .then(() => {
        //   This code is always executed at the end. After success or failure.
      })
  },
  data() {
    return {
      projects: [],
      message: '',
      text: ''
    }
  },
  methods: {
    deleteProject(id) {
      Api.delete(`/projects/${id}`)
        .then(reponse => {
          const index = this.projects.findIndex(project => project._id === id)
          this.projects.splice(index, 1)
        })
        .catch(error => {
          console.error(error)
        })
    },
    createProject() {
      console.log(this.text)
    //   Api.post(...)
    }
  }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>
