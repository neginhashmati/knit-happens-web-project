<template>
    <div>
        <b-button-close v-on:click="$emit('del-project', project._id)" >&times;</b-button-close>
        <b-button v-on:click="$emit('load-project', project._id)">O</b-button>
        <p>Name: Winter Hat{{project.name}}</p>
        <div class="detail">Status: {{project.name}}</div>
        <div class="detail">Status: In Progress {{project.status}}</div>
        <div class="detail">Priority: High {{project.priority}}</div>
        <div class="more-info">PROJECT SUMMARY</div>
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
