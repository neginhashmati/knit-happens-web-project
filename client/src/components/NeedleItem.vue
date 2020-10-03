<template>
    <div>
        <b-button-close v-on:click="$emit('del-needle', needle._id)" >&times;</b-button-close>
        <p>The {{camel.color}} camel</p>
        <div class="detail">is at position {{camel.position}}</div>
        <div class="more-info">CAMEL SUMMARY</div>
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
