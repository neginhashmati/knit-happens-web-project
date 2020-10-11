<template>
  <div>
    <form class="form-group">
      <input v-model="input.name" class="form-control" placeholder="Name" required>
      <input v-model="input.brand" class="form-control" placeholder="Yarn brand">
      <input v-model="input.color" class="form-control" placeholder="Yarn color">
      <input v-model="input.weight" class="form-control" placeholder="Yarn weight">
      <input v-model="input.fiber" class="form-control" placeholder="Yarn fiber">
      <input v-model="input.source_name" class="form-control" placeholder="Source name">
      <input v-model="input.cost" class="form-control" placeholder="Cost">
      <input v-model="input.owned" type="checkbox" true-value="yes" false-value="no">
      <b-form-textarea id="textarea" v-model="input.note" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
      <b-button v-on:click="$emit('create-yarn', input)">Add New yarn</b-button>
    </form>
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
