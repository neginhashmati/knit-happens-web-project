<template>
  <div class="card">
    <div class="title">
      <p>Name: {{ needle.name }}
        <b-button-close v-on:click="$emit('delete-needle', needle._id)" >&times;</b-button-close></p>
    </div>
    <p>Size: {{ needle.size }} mm</p>
    <p>Cost: {{ needle.cost }}</p>
    <p>Owned: {{ needle.owned }}</p>
    <p>Note: {{ needle.note }}</p>
  </div>
</template>

<script>
export default {
  name: 'needle-item',
  props: ['needle'],
  methods: {
    // deleteCamel() {
    //   this.$emit('del-camel', this.camel._id)
    //   console.log('del-camel with id:' + this.camel._id)
    // }
  }
}
</script>

<style scoped>

.card {
  margin-bottom: 5px;
  width: 200px;
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
