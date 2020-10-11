<template>
  <b-container class="col-12 col-md-10 col-xl-8 light-box">
    <img src="../assets/cat-with-yarn.png">
    <h3>{{project.name}}</h3>
    <b-container class="inner-box">
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p>Project name: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ project.name }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
        <form class="form-inline">
          <input v-model="nameNew" type="name" class="form-control" placeholder="New name">
          <input type="submit" class="btn btn-info" @click="changeName">
        </form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p>Date created: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ project.date }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p>Status: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ project.status }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
        <form class="form-inline">
          <select class="custom-select"  v-model="statusNew" >
            <option selected>Open this select menu</option>
            <option value="Not started">Not Started</option>
            <option value="In progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <input type="submit" class="btn btn-info" @click="changeStatus">
        </form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p>Priority: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ project.priority }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
        <form class="form-inline">
            <select class="custom-select" v-model="priorityNew" >
              <option selected>Open this select menu</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          <input type="submit" class="btn btn-info" @click="changePriority">
        </form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p>Note: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
          <p>{{ project.note }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
          <form class="form-inline">
            <b-form-textarea id="textarea" v-model="noteNew" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
            <input type="submit" class="btn btn-info" @click="changeNote">
          </form>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" sm="6" md="6" v-for="yarn in yarns" v-bind:key="yarn._id">
            <yarn-item v-bind:yarn="yarn" v-on:delete-yarn="deleteYarn"/>
        </b-col>
        <b-col cols="6" sm="6" md="6" v-for="needle in needles" v-bind:key="needle._id">
            <needle-item v-bind:needle="needle" v-on:delete-needle="deleteNeedle"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" sm="6" md="6">
          <new-yarn-form v-on:create-yarn="createYarn"/>
        </b-col>
        <b-col cols="6" sm="6" md="6">
          <new-needle-form v-on:create-needle="createNeedle"/>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import NeedleItem from '@/components/NeedleItem.vue'
import YarnItem from '@/components/YarnItem.vue'
import NewNeedleForm from '@/components/NewNeedleForm.vue'
import NewYarnForm from '@/components/NewYarnForm.vue'
// import EditProjectForm from '@/components/EditProject'

export default {
  name: 'specificproject',
  components: {
    NeedleItem,
    YarnItem,
    NewYarnForm,
    NewNeedleForm
    // EditProjectForm
  },

  mounted() {
    var id = this.$route.params.id
    console.log('PAGE is loaded', id)
    // Load the real projects from the server
    /* Api.get('/projects/' + id)
      .then(response => {
        this.project = response.data
        localStorage.projectID = this.project._id
        console.log('loaded project', this.project)
      }) */
    this.loadSpecificProject()
    this.loadAllNeedles()
    this.loadAllYarns()
  },
  data() {
    return {
      message: 'none',
      project: null,
      needles: [],
      yarns: [],
      nameNew: 'none',
      statusNew: 'none',
      priorityNew: 'none',
      noteNew: 'none',
      userName: localStorage.userName,
      userID: localStorage.userID,
      projectID: localStorage.projectID
    }
  },
  methods: {
    changeName() {
      Api.patch('/projects/' + localStorage.projectID, {
        name: this.nameNew
      })
        .then((response) => {
          console.log(response)
          alert('Project name has been changed')
        }, (error) => {
          console.log(error)
        })
    },
    changeStatus() {
      Api.patch('/projects/' + localStorage.projectID, {
        status: this.statusNew
      })
        .then((response) => {
          console.log(response)
          alert('Project status has been changed')
        }, (error) => {
          console.log(error)
        })
    },
    changePriority() {
      Api.patch('/projects/' + localStorage.projectID, {
        priority: this.priorityNew
      })
        .then((response) => {
          console.log(response)
          alert('Project priority has been changed')
        }, (error) => {
          console.log(error)
        })
    },
    changeNote() {
      Api.patch('/projects/' + localStorage.projectID, {
        note: this.noteNew
      })
        .then((response) => {
          console.log(response)
          alert('Project note has been changed')
        }, (error) => {
          console.log(error)
        })
    },
    deleteNeedle(id) {
      Api.delete(`/needles/${id}`)
        .then(response => {
          console.log(response)
          this.loadAllNeedles()
        })
        .catch(error => {
          console.error(error)
        })
    },
    deleteYarn(id) {
      Api.delete(`/yarns/${id}`)
        .then(response => {
          console.log(response)
          this.loadAllYarns()
        })
        .catch(error => {
          console.error(error)
        })
    },
    createNeedle(input) {
      console.log('hello')
      console.log(input)
      Api.post('/needles/' + localStorage.projectID + '/needles', input)
        .catch(error => {
          console.error(error)
        })
    },
    createYarn(input) {
      console.log('hello')
      console.log(input)
      Api.post('/yarns/' + localStorage.projectID + '/yarns', input)
        .catch(error => {
          console.error(error)
        })
    },
    loadSpecificProject() {
      Api.get('/projects/' + localStorage.projectID)
        .then(response => {
          this.project = response.data
          localStorage.projectID = this.project._id
          console.log('loaded project', this.project)
        })
    },
    loadAllNeedles() {
      Api.get('projects/' + localStorage.projectID + '/needles')
        .then(response => {
          console.log(response.data)
          this.needles = response.data.needles
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
    loadAllYarns() {
      Api.get('projects/' + localStorage.projectID + '/yarns')
        .then(response => {
          console.log(response.data)
          this.yarns = response.data.yarns
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
</script>

<style>

  p {
    color: #2D3E4E;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  h3 {
    color: #2D3E4E;
    font-size: 10px;
    padding: 40px 10px 40px 10px;
  }

  .bold-box {
    color: #2D3E4E;
  }

  .light-box {
    background: #8CBDB9;
   /* display: flex;*/
    justify-content: center;
    align-items: center;
    padding: 4em 4em 4em 4em;
    margin: 4em 4em 4em 4em;
  }

  .inner-box {
    background: white;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    padding: 20px 10px 20px 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
