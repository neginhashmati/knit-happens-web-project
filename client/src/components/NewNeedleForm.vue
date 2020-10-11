<template>
  <div>
    <b-button v-b-modal.modal-create-needle>Add new needle</b-button>
      <b-modal
      id="modal-create-needle"
      ref="modal"
      title="New Needle"
      ok-disabled
      cancel-disabled
      hide-footer
      >
      <form>
        <label>Needle name</label>
          <b-form-input v-model="input.name" size="sm" placeholder="Enter needle name"></b-form-input>
        <label>Needle source</label>
          <b-form-input v-model="input.source_name" size="sm" placeholder="Enter where the needle was purchased"></b-form-input>
        <label>Needle size</label>
          <b-form-input v-model="input.source_name" size="sm" placeholder="Enter the needle size in mm"></b-form-input>
        <label>Needle cost</label>
          <b-form-input v-model="input.cost" size="sm" class="mt-3" placeholder="Enter the cost of the needle"></b-form-input>
        <label>Do you own the needle?</label>
          <b-form-select v-model="input.owned" :options="options"  size="sm"></b-form-select>
        <label>Needle notes</label>
          <b-form-textarea
              id="textarea"
              v-model="input.note"
              placeholder="Enter notes here:"
              rows="3"
              max-rows="6"
          ></b-form-textarea>
        <b-button v-on:click="$bvModal.hide('modal-create-needle');$emit('create-needle', input)">Add New Needle</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'new-needle-form',
  data() {
    return {
      input: {
        name: '',
        source_name: null,
        cost: null,
        size: null,
        owned: false,
        note: null
      },
      userName: localStorage.userName,
      userID: localStorage.userID,
      options: [
        { value: null, text: 'Please select an option' },
        { value: true, text: 'Yes, I own these needles' },
        { value: false, text: 'No, I dont own these needles' }
      ]
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
