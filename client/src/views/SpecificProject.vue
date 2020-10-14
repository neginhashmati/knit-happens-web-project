<template>
  <b-container class="col-12 col-md-10 col-xl-8">
    <h3>{{project.name}}</h3>
    <b-container class="inner-box">
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
          <p class="attribute">Project name: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
          <p>{{ project.name }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
          <b-form inline>
            <label class="sr-only">New Name</label>
            <b-input
              v-model="nameNew"
              type="name"
              class="form-control"
              size="sm"
              placeholder="New name"
            ></b-input>
            <b-button type="submit" size="sm" variant="info" @click="changeName">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Date created: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ project.date }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Status: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ project.status }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
          <b-form inline>
            <b-form-select
            v-model="statusNew"
            :options="statusOptions"
            size="sm"
            ></b-form-select>
            <b-button
            type="submit"
            variant="info"
            size="sm"
            @click="changeStatus">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Priority: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ project.priority }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
        <b-form inline>
            <b-form-select
            v-model="priorityNew"
            :options="priorityOptions"
            size="sm"
            ></b-form-select>
            <b-button
            type="submit"
            variant="info"
            size="sm"
            @click="changeStatus">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Note: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
          <p>{{ project.note }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
          <form class="form-inline">
            <b-form-textarea
            id="textarea"
            v-model="noteNew"
            placeholder="Edit note"
            rows="3"
            max-rows="6"
            size="sm"
            ></b-form-textarea>
            <b-button
            type="submit"
            variant="info"
            size="sm"
            @click="changeNote">Submit</b-button>
          </form>
        </b-col>
      </b-row>
      <b-row>
        <h3> Yarns </h3>
      </b-row>
      <b-row>
        <b-col cols="8" sm="6" md="4" v-for="yarn in yarns" v-bind:key="yarn._id">
            <yarn-item v-bind:yarn="yarn" v-on:delete-yarn="deleteYarn"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8" sm="6" md="5">
          <new-yarn-form v-on:create-yarn="createYarn"/>
        </b-col>
      </b-row>
      <b-row>
        <h3> Needles </h3>
      </b-row>
      <b-row>
        <b-col cols="8" sm="6" md="4" v-for="needle in needles" v-bind:key="needle._id">
            <needle-item v-bind:needle="needle" v-on:delete-needle="deleteNeedle"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" sm="5" md="5">
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

export default {
  name: 'specificproject',
  components: {
    NeedleItem,
    YarnItem,
    NewYarnForm,
    NewNeedleForm
  },

  mounted() {
    this.projectID = this.$route.params.id
    console.log('PAGE is loaded', this.projectID)

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
      projectID: null,
      statusOptions: [
        { value: null, text: 'Please select a status', disabled: true },
        { value: 'Not started', text: 'Not started' },
        { value: 'In progress', text: 'In progress' },
        { value: 'Completed', text: 'Completed' }
      ],
      priorityOptions: [
        { value: null, text: 'Please select a priority', disabled: true },
        { value: 'Low', text: 'Low' },
        { value: 'Medium', text: 'Medium' },
        { value: 'High', text: 'Highd' }
      ]
    }
  },
  methods: {
    changeName() {
      Api.patch('/projects/' + this.projectID, {
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
      Api.patch('/projects/' + this.projectID, {
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
      Api.patch('/projects/' + this.projectID, {
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
      Api.patch('/projects/' + this.projectID, {
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
      console.log('Doing stuff')
      console.log(input)
      Api.post('/needles/' + this.projectID + '/needles', input)
        .then(response => {
          console.log(response)
          this.loadAllNeedles()
        })
        .catch(error => {
          console.error(error)
        })
    },
    createYarn(input) {
      console.log('hello')
      console.log(input)
      Api.post('/yarns/' + this.projectID + '/yarns', input)
        .then(response => {
          console.log(response)
          this.loadAllYarns()
        })
        .catch(error => {
          console.error(error)
        })
    },
    loadSpecificProject() {
      Api.get('/projects/' + this.projectID)
        .then(response => {
          this.project = response.data
          this.projectID = this.project._id
          console.log('loaded project', this.project)
        })
    },
    loadAllNeedles() {
      Api.get('projects/' + this.projectID + '/needles')
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
      Api.get('projects/' + this.projectID + '/yarns')
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

  .attribute {
    font-weight: bold;
  }
  .bold-box {
    color: #2D3E4E;
  }

  .light-box {
    background: #8CBDB9;
    justify-content: center;
    align-items: center;
    padding: 4em 4em 4em 4em;
    margin: 4em 4em 4em 4em;
  }

  .inner-box {
    background: white;
    justify-content: center;
    align-items: center;
    padding: 20px 10px 20px 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
