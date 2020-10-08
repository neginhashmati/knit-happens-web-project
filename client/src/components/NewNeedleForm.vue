<template>
  <div>
    <div>
      <p>Name: </p>
      <p>Source: </p>
      <p>Size: </p>
      <p>Cost: </p>
      <p>Owned: </p>
      <p>Note: </p>
    </div>
    <div>
      <form class="form-group">
        <input v-model="input.needleNameReg" class="form-control" placeholder="Name" required>
        <input v-model="input.needleSourceReg" class="form-control" placeholder="Source name">
        <input v-model="input.needleSizeReg" class="form-control" placeholder="Needle size">
        <input v-model="input.needleCostReg" class="form-control" placeholder="Cost">
        <input v-model="input.needleOwnedReg" type="checkbox" true-value="yes" false-value="no">
        <b-form-textarea id="textarea" v-model="input.needleNoteReg" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
        <b-button v-on:click="$emit('create-needle', input)">Add New needle</b-button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'new-needle-form',
  data() {
    return {
      input: {
        needleNameReg: '',
        needleSourceReg: null,
        needleCostReg: null,
        needleSizeReg: null,
        needleOwnedReg: false,
        needleNoteReg: null
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
