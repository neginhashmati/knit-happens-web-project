<template>
    <div>
        <p>Name: {{ needle.name }}</p>
        <p>Size: {{ needle.size }} mm</p>
        <p>Cost: {{ needle.cost }}</p>
        <p>Owned: {{ needle.owned }}</p>
        <p>Note: {{ needle.note }}</p>
        <b-button-close v-on:click="$emit('del-needle', needle._id)" >&times;</b-button-close>
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
