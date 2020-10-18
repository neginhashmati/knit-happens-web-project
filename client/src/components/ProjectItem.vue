<template>
  <div class="card">
    <div class="title">
      <p align="left">{{ project.name }}</p>
      <!-- <p align="right"> -->
      <div class="icons">
        <b-icon
          icon="pencil"
          aria-hidden="true"
          class="h5 mb-2"
          v-on:click="$emit('load-project', project._id)">
        </b-icon>
        <b-icon
          icon="x"
          aria-hidden="true"
          class="h5 mb-2"
          v-on:click="$emit('delete-project', project._id)">&times;
        </b-icon>
      </div>
    </div>
    <div class="card-body">
      <div>
        <p class="attribute">Status: </p>
        <p class="attribute">Priority:</p>
      </div>

      <div>
        <p>{{ project.status }}</p>
          <p>{{ project.priority }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'project-item',
  props: ['project'],
  methods: {
  }
}
</script>

<style scoped>
.card {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid #000000;
  background-color: white;
  text-align: left;
  float: left;
  transition: box-shadow 0.2s;
   /* width: 250px;
  height: 300px; */
}
.card-body {
  display: grid;
  grid-template-columns: 70px 150px;
  grid-column-gap: 0px;
}

.card:hover {
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
}

.title {
  font-weight: bold;
  font-size: 1rem;
  background-color: #f6be7b;
  border-bottom: 2px solid #000000;
}

p {
  padding-top: 5px;
  padding-right: 5px;
  margin: 0px;
  font-size: 1rem;
}

.icons {
  float: right;
}
</style>
