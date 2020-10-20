<template>
    <b-container>
      <b-row>
      </b-row>
      <h1>My projects:</h1>
      <b-row align-h="center">
        <b-col cols="12" sm="6" md="4" v-for="project in projects" v-bind:key="project._id">
            <project-item v-bind:project="project" v-on:delete-project="deleteProject" v-on:load-project="loadProject"/>
        </b-col>
      </b-row>

  <b-col cols="12">
         <project-form v-on:create-project="createProject"/>
      </b-col>

    </b-container>
</template>

<script>
import { Api } from '@/Api'
import ProjectItem from '@/components/ProjectItem.vue'
import ProjectForm from '@/components/ProjectForm.vue'

export default {
  name: 'projects',
  components: {
    ProjectItem,
    ProjectForm
  },
  mounted() {
    console.log('PAGE is loaded')
    // Load the real projects from the server
    // Api.get('/projects')
    this.loadAllProjects()
  },

  data() {
    return {
      message: '',
      projects: [],
      text: '',
      userID: localStorage.userID,
      loggedIn: false
    }
  },

  methods: {
    deleteProject(id) {
      Api.delete(`/projects/${id}`)
        .then(response => {
          console.log(response)
          this.loadAllProjects()
        })
        .catch(error => {
          console.error(error)
        })
    },

    isDisabled: function () {
      if (localStorage.userID !== null) {
        return !this.loggedIn
      }
    },
    createProject(input) {
      console.log('hello')
      console.log(input)
      Api.post('projects/' + localStorage.userID + '/projects', input)
        .then(response => {
          console.log(response)
          // var newProject = response.data
          // this.projects.push(newProject)
          this.loadAllProjects()
        })
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
    },
    loadProject(id) {
      location.href = '/specificproject/' + id
      localStorage.projectID = this.project._id
    },
    loadAllProjects() {
      if (localStorage.userID === '') {
        alert('You are not logged in.\nYou are being diverted to the login page!')
        document.location.href = '/'
      } else {
        Api.get('users/' + localStorage.userID + '/projects')
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
      }
    }
  }
}
</script>

<style scoped>

#createproject-button {
  margin: auto;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: 2px solid black;
  background-color: #f6be7b;
  padding-top: 7px;
  color: black;
}

#createproject-button:hover {
  background-color: #E09E50;
}

a {
  color: black;
}

a:hover {
   color: black
}

</style>
