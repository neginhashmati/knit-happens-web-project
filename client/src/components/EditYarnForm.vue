<template>
    <div>
      <b-button v-b-modal.modal-edit-yarn>Change Yarn Status</b-button>

      <b-modal
      id="modal-edit-yarn"
      ref="modal"
      title="Edit Yarn"
      ok-disabled
      cancel-disabled
      hide-footer
    >
        <form>
            <label>Do you own the yarn?</label>
            <b-form-select v-model="ownedNew" :options="ownedOptions" size="sm"></b-form-select><br><br>
            <b-button v-on:click="$bvModal.hide('modal-edit-yarn');$emit('edit-yarn', ownedNew)">Edit Yarn Details</b-button>
        </form>
      </b-modal>
    </div>
</template>

<script>

export default {
  name: 'edit-yarn-form',
  data() {
    return {
      userName: localStorage.userName,
      userID: localStorage.userID,
      ownedNew: '',
      ownedOptions: [
        { value: null, text: 'Please select an option', disabled: true },
        { value: true, text: 'Yes, I own this yarn' },
        { value: false, text: 'No, I don\'t own this yarn' }
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
