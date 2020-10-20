<template>
    <div>
      <b-button v-b-modal.modal-create-project>Create New Project</b-button>
      <!-- <div class="createproject-button" v-b-modal.modal-create-project>Create New Project</div> -->

      <b-modal
      id="modal-create-project"
      ref="modal"
      title="New Project"
      ok-disabled
      cancel-disabled
      hide-footer
    >
        <!-- <form ref="form" @submit.stop.prevent="handleSubmit"> -->
        <form>
        <label>Project Name </label><span class="required"> * </span>
        <b-form-input v-model="input.name" placeholder="Enter project name"></b-form-input>

        <label>Date </label><span class="required"> * </span>
        <b-form-datepicker id="date-blah" v-model="input.date"></b-form-datepicker>

        <label>Notes </label>
        <b-form-textarea
            id="textarea"
            v-model="input.note"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
        ></b-form-textarea>

        <label>Priority </label><span class="required"> * </span>
        <b-form-select v-model="input.priority" :options="priorityOptions"></b-form-select>

        <label>Status </label><span class="required"> * </span>
        <b-form-select v-model="input.status" :options="statusOptions" size="sm"></b-form-select>

        <p></p>
        <p></p>
        <p></p>
        <p class="required">* Required information</p>

        <b-button v-on:click="$bvModal.hide('modal-create-project');$emit('create-project', input)">Create New Project</b-button>
        </form>
      </b-modal>
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
        priority: 'Low',
        status: 'Not started'
      },
      priorityOptions: [
        { value: 'Low', text: 'Low' },
        { value: 'Medium', text: 'Medium' },
        { value: 'High', text: 'High' }
      ],
      statusOptions: [
        { value: 'Not started', text: 'Not Started' },
        { value: 'In progress', text: 'In Progress' },
        { value: 'Completed', text: 'Completed' }
      ]
    }
  },

  methods: {
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

.required {
  color: red;
  font-size: 0.9rem;
}
</style>
