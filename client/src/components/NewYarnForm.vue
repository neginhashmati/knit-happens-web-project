<template>
  <div>
    <div>
      <p>Name: </p>
        <p>Brand: </p>
        <p>Color: </p>
        <p>Weight: </p>
        <p>Fiber: </p>
        <p>Aquired from: </p>
        <p>Cost: </p>
        <p>Owned: </p>
        <p>Note: </p>
    </div>
    <div>
      <form class="form-group">
        <input v-model="input.yarnNameReg" class="form-control" placeholder="Name" required>
        <input v-model="input.yarnBrandReg" class="form-control" placeholder="Yarn brand">
        <input v-model="input.yarnColorReg" class="form-control" placeholder="Yarn color">
        <input v-model="input.yarnWeightReg" class="form-control" placeholder="Yarn weight">
        <input v-model="input.yarnFiberReg" class="form-control" placeholder="Yarn fiber">
        <input v-model="input.yarnSourceReg" class="form-control" placeholder="Source name">
        <input v-model="input.yarnCostReg" class="form-control" placeholder="Cost">
        <input v-model="input.yarnOwnedReg" type="checkbox" true-value="yes" false-value="no">
        <b-form-textarea id="textarea" v-model="input.yarnNoteReg" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
        <b-button v-on:click="$emit('create-yarn', input)">Add New yarn</b-button>
    </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'new-yarn-form',
  data() {
    return {
      input: {
        yarnNameReg: '',
        yarnSourceReg: null,
        yarnCostReg: null,
        yarnBrandReg: null,
        yarnColorReg: null,
        yarnWeightReg: null,
        yarnFiberReg: null,
        yarnOwnedReg: false,
        yarnNoteReg: null
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
