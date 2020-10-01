<template>
    <b-container>
      <p class="red">{{message}}</p>
      <b-row>
        <!-- <b-col cols="7" offset="1" offset-md="2">
          <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
        </b-col> -->
        <b-col cols="15">
          <b-button v-on:click="createProject">Create New Project</b-button>
        </b-col>
        <b-col cols="4">
          <b-button v-on:click="deleteAllProjects">Delete All Projects</b-button>
        </b-col>
      </b-row>
      <h1>My projects:</h1>
      <b-row align-h="center">
        <b-col cols="12" sm="6" md="4" v-for="project in projects" v-bind:key="project._id">
            <project-item v-bind:project="project" v-on:del-project="deleteProject"/>
        </b-col>
      </b-row>
    </b-container>
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
    console.log('PAGE is loaded')
    // Load the real projects from the server
    Api.get('/projects')
      .then(response => {
        console.log(response.data)
        this.projects = response.data.projects
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.projects = []
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
        .catch(error => {
          console.error(error)
        })
    },
    createProject() {
      console.log(this.text)
      Api.post('/projects')
        .catch(error => {
          console.error(error)
        })
    },
    deleteAllProjects() {
      console.log(this.text)
      Api.delete('/projects')
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>
