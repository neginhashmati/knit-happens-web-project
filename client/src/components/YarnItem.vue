<template>
    <div>
        <p>Name: {{ yarn.name }}</p>
        <p>Brand: {{ yarn.brand }}</p>
        <p>Color: {{ yarn.color }}</p>
        <p>Weight: {{ yarn.weight }}</p>
        <p>Fiber: {{ yarn.fiber }}</p>
        <p>Aquired from: {{ yarn.source_name }}</p>
        <p>Cost: {{ yarn.cost }}</p>
        <p>Owned: {{ yarn.owned }}</p>
        <p>Note: {{ yarn.note }}</p>
        <b-button-close v-on:click="$emit('del-yarn', yarn._id)" >&times;</b-button-close>
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
    background-color: aqua;
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
