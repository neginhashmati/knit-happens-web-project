<template>
    <div>
        <p>The {{project.name}} project is {{project.priority}} priority</p>
        <b-button variant="danger" v-on:click="$emit('del-project', project._id)">X</b-button>
    </div>
</template>

<script>
export default {
  name: 'project-item',
  props: ['project'],
  methods: {
    // deleteCamel() {
    //   this.$emit('del-camel', this.camel._id)
    //   console.log('del-camel with id:' + this.camel._id)
    // }
  }
}
</script>

<style scoped>
p {
    background-color: aqua;
}
</style>
