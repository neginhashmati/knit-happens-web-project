<template>
    <div>
        <b-button-close v-on:click="$emit('delete-project', project._id)" >&times;</b-button-close>
        <b-button v-on:click="$emit('load-project', project._id)">Edit</b-button>
        <p>Name: {{project.name}}</p>
        <div class="detail">Notes: {{project.note}}</div>
        <div class="detail">Status: {{project.statusOptions}}</div>
        <div class="detail">Priority: {{project.priorityOptions}}</div>
    </div>
</template>

<script>
export default {
  name: 'project-item',
  props: ['project'],
  methods: {
    // deleteProject() {
    //   this.$emit('del-project', this.project._id)
    //   console.log('del-project with id:' + this.project._id)
    // }
  }
}
</script>

<style scoped>
p {
    background-color: aqua;
}
@media (max-width: 600px) {
  .detail {
    color: red;
    font-size: 16pt;
    font-weight: bold;
    /* display: none; */
  }
}

@media (min-width: 600px) {
  .more-info {
    display: none;
  }
}

</style>
