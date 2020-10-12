<template>
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
          <select class="custom-select">
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
            <select class="custom-select">
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
    </b-container>
</template>

<script>

export default {
  name: 'edit-project-form',
  data() {
    return {
      input: {
        nameNew: '',
        statusNew: null,
        priorityNew: null,
        noteNew: ''
      },
      userName: localStorage.userName,
      userID: localStorage.userID
      // when checked:
      // vm.toggle === 'yes'
      // when unchecked:
      // vm.toggle === 'no'

    }
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
