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
          <input v-model="nameNew" type="name" class="form-control" placeholder="New name" required>
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
          <input v-model="statusNew" type="status" class="form-control" placeholder="New Password" required>
          <select class="custom-select">
            <option selected>Open this select menu</option>
            <option value="1">Not Started</option>
            <option value="2">In Progress</option>
            <option value="3">Completed</option>
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
          <input v-model="priorityNew" type="priority" class="form-control" placeholder="New Password" required>
            <select class="custom-select">
              <option selected>Open this select menu</option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
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
          <input v-model="noteNew" type="note" class="form-control" placeholder="" required>
          <input type="submit" class="btn btn-info" @click="changeNote">
        </form>
        </b-col>
      </b-row>
      <b-row>
      <b-col class="col-2 col-md-2 col-xl-2">
        <p>Needles: </p>
        </b-col>
        <b-col cols="12" sm="6" md="4" v-for="needle in needles" v-bind:key="needle._id">
          <needle-item v-bind:needle="needle" v-on:del-needle="deleteNeedle"/>
        </b-col>
      </b-row>
      <b-row>
      <b-col class="col-2 col-md-2 col-xl-2">
        <p>Yarns: </p>
        </b-col>
        <b-col cols="12" sm="6" md="4" v-for="yarn in yarns" v-bind:key="yarn._id">
          <yarn-item v-bind:project="project" v-on:del-yarn="deleteYarn"/>
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

export default {
  name: 'specificproject',
  components: {
    NeedleItem,
    YarnItem
  },

  mounted() {
    var id = this.$route.params.id
    console.log('PAGE is loaded', id)
    // Load the real projects from the server
    Api.get('/projects/' + id)
      .then(response => {
        this.project = response.data
        console.log('loaded project', this.project)
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
      message: 'none',
      project: null,
      userName: localStorage.userName,
      userID: localStorage.userID
    }
  },
  methods: {

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
