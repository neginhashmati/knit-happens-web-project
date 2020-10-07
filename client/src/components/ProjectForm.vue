<template>
    <div>
        <!-- <b-button-close v-on:click="$emit('del-project', project._id)" >&times;</b-button-close> -->
        <!-- <b-button v-on:click="$emit('load-project', project._id)">Edit</b-button> -->
        <form>
        <label>Project Name</label>
        <b-form-input v-model="input.name" placeholder="Enter project name"></b-form-input>

        <label>Date</label>
        <b-form-datepicker id="date-blah" v-model="input.date"></b-form-datepicker>

        <label>Notes</label>
        <b-form-textarea
            id="textarea"
            v-model="input.note"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
        ></b-form-textarea>

        <label>Priority</label>
        <b-form-select v-model="input.selected" :options="priorityOptions"></b-form-select>

        <label>Status</label>
        <b-form-select v-model="input.selected" :options="statusOptions" size="sm"></b-form-select>

        <b-button v-on:click="$emit('create-project', input)">Create New Project</b-button>
        </form>
    </div>
</template>

<script>

export default {
  name: 'project-form',
  data() {
    return {
      input: {
        text: '',
        date: null,
        note: null,
        name: null,
        selected: null
      },
      priorityOptions: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Low' },
        { value: 'b', text: 'Medium' },
        { value: 'd', text: 'High' }
      ],
      statusOptions: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Not Started' },
        { value: 'b', text: 'In Progress' },
        { value: 'd', text: 'Completed' }
      ]
    }
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
