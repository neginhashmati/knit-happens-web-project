<template>
    <div>
      <b-button v-b-modal.modal-edit-needle>Change Needle Status</b-button>

      <b-modal
      id="modal-edit-needle"
      ref="modal"
      title="Edit Yarn"
      ok-disabled
      cancel-disabled
      hide-footer
    >
        <form>
          <label>Do you own the needle?</label>
          <b-form-select v-model="input.owned" :options="ownedOptions"  size="sm"></b-form-select><br><br>
            <b-button v-on:click="$bvModal.hide('modal-edit-needle');$emit('edit-needle', input)">Edit Needle</b-button>
        </form>
      </b-modal>
    </div>
</template>

<script>

export default {
  name: 'edit-needle-form',
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
    }
  },

  methods: {
  }
}
</script>

<style scoped>
#edityarn-button {
  margin: auto;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: 2px solid black;
  background-color: #f6be7b;
  padding-top: 7px;
  color: black;
}

#edityarn-button:hover {
  background-color: #E09E50;
}

a {
  color: black;
}

a:hover {
   color: black
}

</style>
