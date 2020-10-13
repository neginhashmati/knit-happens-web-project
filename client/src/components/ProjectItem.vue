<template>
    <div class="card">
     <div class="title">
      <p>Name: {{project.name}}
        <b-button-close v-on:click="$emit('delete-project', project._id)" >&times;</b-button-close>
        <b-button v-on:click="$emit('load-project', project._id)">Edit</b-button></p>
    </div>
        <!-- <div class="detail">Date: {{project.date}}</div> -->
        <!-- <div class="detail">Notes: {{project.note}}</div> -->
        <div class="detail">Status: {{project.status}}</div>
        <div class="detail">Priority: {{project.priority}}</div>
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

.card {
  margin-bottom: 5px;
  border: 2px solid #000000;
  background-color: white;
  text-align: left;
  float: left;
  transition: box-shadow .2s;
}

.card:hover {
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
}

.title {
  font-weight: bold;
  font-size: 14px;
  background-color: #f6be7b;
  border-bottom: 2px solid #000000;
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
