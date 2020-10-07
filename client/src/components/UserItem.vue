<template>
    <div v-if="projects !== null" class="user">
      <p>{{user.name}}</p>
      <!-- Create check/error handling for users with empty projects (no projects) -->
      <div class="detail">Projects: {{user.projects[user.projects.length-1].name}}</div>
    </div>
    <div v-else class="user">
    <p>{{user.name}}</p>
      <div class="detail">Projects: {{" "}}</div>
    </div>
</template>

<script>
export default {
  name: 'user-item',
  props: ['user'],
  methods: {
    displayUser() {
      console.log('display-user with id:' + this.user._id)
    }
  }
}
</script>

<style scoped>
p {
    background-color: #E09E50;
    color: #2D3E4E;
    font-size: 16pt;
}
@media (max-width: 600px) {
  .detail {
    color: #2D3E4E;
    font-size: 16pt;
    /* display: none; */
  }
}

.user {
  border-style: solid;
  border-color:  #E09E50;
}
</style>
