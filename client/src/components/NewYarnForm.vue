<template>
  <div>
    <b-button v-b-modal.modal-create-yarn>Add New Yarn</b-button>
      <b-modal
      id="modal-create-yarn"
      ref="modal"
      title="New Yarn"
      ok-disabled
      cancel-disabled
      hide-footer
      >
      <form>
        <label>Yarn name</label><span class="required"> *</span>
          <b-form-input v-model="input.name" size="sm" placeholder="Enter yarn name"></b-form-input><br>

        <label>Yarn brand</label><span class="required"> *</span>
          <b-form-input v-model="input.brand" size="sm" placeholder="Enter the yarn's brand"></b-form-input><br>

        <label>Yarn color</label><span class="required"> *</span>
          <b-form-input v-model="input.color" size="sm" placeholder="Enter the yarn's color"></b-form-input><br>

        <label>Yarn weight</label><span class="required"> *</span>
          <b-form-select v-model="input.weight" :options="weightOptions" size="sm" placeholder="Select yarn weight"></b-form-select><br><br>

        <label>Yarn fiber</label><span class="required"> *</span>
          <b-form-input v-model="input.fiber" size="sm" placeholder="Enter the yarn's fiber (e.g. wool, acylic, cotton)"></b-form-input><br>

        <label>Yarn source</label><span class="required"> *</span>
          <b-form-input v-model="input.source_name" size="sm" placeholder="Enter where the yarn was purchased"></b-form-input><br>

        <label>Yarn cost</label><span class="required"> *</span>
        <b-input-group prepend="€" size="sm">
          <b-form-input v-model="input.cost" size="sm" placeholder="Enter the cost of the yarn"></b-form-input>
        </b-input-group><br>

        <label>Do you own the yarn?</label><span class="required"> *</span>
          <b-form-select v-model="input.owned" :options="ownedOptions" size="sm"></b-form-select><br><br>

        <label>Yarn notes</label>
          <b-form-textarea
              id="textarea"
              v-model="input.note"
              placeholder="Enter notes here:"
              rows="3"
              max-rows="6"
          ></b-form-textarea>
          <p class="required">* Required information</p>
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
      weightOptions: [
        { value: null, text: 'Please select a weight', disabled: true },
        { value: 'cobweb', text: 'Cobweb' },
        { value: 'lace', text: 'Lace' },
        { value: 'sock', text: 'Sock' },
        { value: 'dk', text: 'DK' },
        { value: 'aran', text: 'Aran' },
        { value: 'chunky', text: 'Chunky' },
        { value: 'super-chunky', text: 'Super-chunky' },
        { value: 'jumbo', text: 'Jumbo' }
      ],
      ownedOptions: [
        { value: null, text: 'Please select an option', disabled: true },
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

.required {
  color: red;
  font-size: 0.9rem;
}
</style>
