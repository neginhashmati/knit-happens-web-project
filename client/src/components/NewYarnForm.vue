<template>
  <div>
    <b-button v-b-modal.modal-create-yarn>Add new yarn</b-button>
      <b-modal
      id="modal-create-yarn"
      ref="modal"
      title="New Yarn"
      ok-disabled
      cancel-disabled
      hide-footer
      >
      <form>
        <label>Yarn name</label>
          <b-form-input v-model="input.name" size="sm" placeholder="Enter yarn name"></b-form-input>
        <label>Yarn brand</label>
          <b-form-input v-model="input.brand" size="sm" placeholder="Enter the yarn's brand"></b-form-input>
        <label>Yarn color</label>
          <b-form-input v-model="input.color" size="sm" placeholder="Enter the yarn's color"></b-form-input>
        <label>Yarn weight</label>
          <b-form-input v-model="input.weight" size="sm" placeholder="Enter yarn weight (e.g. lace, sock, sport)"></b-form-input>
        <label>Yarn fiber</label>
          <b-form-input v-model="input.fiber" size="sm" placeholder="Enter the yarn's fiber (e.g. wool, acylic, cotton)"></b-form-input>
        <label>Yarn source</label>
          <b-form-input v-model="input.source_name" size="sm" placeholder="Enter where the yarn was purchased"></b-form-input>
        <label>Yarn cost</label>
          <b-form-input v-model="input.cost" size="sm" class="mt-3" placeholder="Enter the cost of the yarn"></b-form-input>
        <label>Do you own the yarn?</label>
          <b-form-select v-model="input.owned" :options="options"  size="sm"></b-form-select>
        <label>Yarn notes</label>
          <b-form-textarea
              id="textarea"
              v-model="input.note"
              placeholder="Enter notes here:"
              rows="3"
              max-rows="6"
          ></b-form-textarea>
        <b-button v-on:click="$bvModal.hide('modal-create-yarn');$emit('create-yarn', input)">Add New Yarn</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'new-yarn-form',
  data() {
    return {
      input: {
        name: '',
        source_name: null,
        cost: null,
        brand: null,
        color: null,
        weight: null,
        fiber: null,
        owned: false,
        note: null
      },
      userName: localStorage.userName,
      userID: localStorage.userID,
      options: [
        { value: null, text: 'Please select an option' },
        { value: true, text: 'Yes, I own this yarn' },
        { value: false, text: 'No, I dont own this yarn' }
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
