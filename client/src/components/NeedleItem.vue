<template>
  <div class="card">
    <div class="title">
      <div class="title-body">
        <div>
          <p>{{ needle.name }}</p>
        </div>
        <div class="title-col2">
          <b-icon
            icon="pencil"
            id="edit-button"
            v-on:click="$emit('load-needle', needle._id)">
          </b-icon><span>     </span>
          <b-button-close v-on:click="$emit('delete-needle', needle._id)">&times;</b-button-close>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div>
        <p class="attribute">Source:</p>
        <p class="attribute">Size:</p>
        <p class="attribute">Cost:</p>
        <p class="attribute">Owned:</p>
        <p class="attribute">Note:</p>
      </div>
      <div>
        <p>{{ needle.source_name }}</p>
        <p>{{ needle.size }} mm</p>
        <p>{{ needle.cost }}</p>
        <p>{{ needle.owned }}</p>
        <p>{{ needle.note }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'needle-item',
  props: ['needle'],
  methods: {
  }
}
</script>

<style scoped>

#edit-button {
  cursor: pointer;
}

p {
  padding-top: 5px;
  padding-right: 5px;
  margin: 0px;
}

.card {
  margin-bottom: 5px;
  width: 250px;
  height: 300px;
  border: 2px solid #000000;
  background-color: white;
  text-align: left;
  float: left;
}

.card-body {
  display: grid;
  grid-template-columns: 70px 150px;
  grid-column-gap: 0px;
}

.title {
  font-weight: bold;
  font-size: 14px;
  background-color: #f6be7b;
  padding-left: 5px;
  border-bottom: 2px solid #000000;
}

.title-body {
  display: grid;
  grid-template-columns: 200px 35px;
  grid-column-gap: 0px;
}

.title-col2 {
  align-content: right;
}

.attribute {
  font-weight: bold;
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
