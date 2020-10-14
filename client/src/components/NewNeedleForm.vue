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
          <b-form-select v-model="input.size" :options="sizeOptions" size="sm"></b-form-select>
        <label>Needle cost</label>
          <b-form-input v-model="input.cost" size="sm" placeholder="Enter the cost of the needle"></b-form-input>
        <label>Do you own the needle?</label>
          <b-form-select v-model="input.owned" :options="ownedOptions"  size="sm"></b-form-select>
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
      sizeOptions: [
        { value: null, text: 'Please select a needle size', disabled: true },
        { value: 0.5, text: '0.5mm' },
        { value: 1.0, text: '1.0mm' },
        { value: 1.5, text: '1.5mm' },
        { value: 2.0, text: '2.0mm' },
        { value: 2.5, text: '2.5mm' },
        { value: 3.0, text: '3.0mm' },
        { value: 3.5, text: '3.5mm' },
        { value: 4.0, text: '4.0mm' },
        { value: 4.5, text: '4.5mm' },
        { value: 5.0, text: '5.0mm' },
        { value: 5.5, text: '5.5mm' },
        { value: 6.0, text: '6.0mm' },
        { value: 7.0, text: '7.0mm' },
        { value: 8.0, text: '8.0mm' },
        { value: 9.0, text: '9.0mm' },
        { value: 10.0, text: '10.0mm' },
        { value: 11.0, text: '11.0mm' },
        { value: 12.0, text: '12.0mm' }
      ],
      ownedOptions: [
        { value: null, text: 'Please select an option', disabled: true },
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
