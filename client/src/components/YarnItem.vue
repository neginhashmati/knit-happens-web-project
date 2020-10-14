<template>
    <div class="card">
    <div class="title">
      <p>Name: {{ yarn.name }}
        <b-button-close v-on:click="$emit('delete-yarn', yarn._id)" >&times;</b-button-close></p>
    </div>
        <p>Brand: {{ yarn.brand }}</p>
        <p>Color: {{ yarn.color }}</p>
        <p>Weight: {{ yarn.weight }}</p>
        <p>Fiber: {{ yarn.fiber }}</p>
        <p>Aquired from: {{ yarn.source_name }}</p>
        <p>Cost: {{ yarn.cost }}</p>
        <p>Owned: {{ yarn.owned }}</p>
        <p>Note: {{ yarn.note }}</p>
    </div>
</template>

<script>
export default {
  name: 'yarn-item',
  props: ['yarn'],
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
  padding-top: 5px;
}

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
