<template>
  <div class="card">
    <div class="title">
      <div class="title-body">
        <div>
          <p>{{ yarn.name }}</p>
        </div>
        <div class="title-col2">
          <b-icon
            icon="pencil"
            id="edit-button"
            v-on:click="$emit('load-yarn', yarn._id)">
          </b-icon><span>     </span>
          <b-button-close v-on:click="$emit('delete-yarn', yarn._id)">&times;</b-button-close>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div>
        <p class="attribute">Brand:</p>
        <p class="attribute">Color:</p>
        <p class="attribute">Weight:</p>
        <p class="attribute">Fiber:</p>
        <p class="attribute">Source:</p>
        <p class="attribute">Cost:</p>
        <p class="attribute">Owned:</p>
        <p class="attribute">Note:</p>
      </div>
      <div>
        <p>{{ yarn.brand }}</p>
        <p>{{ yarn.color }}</p>
        <p>{{ yarn.weight }}</p>
        <p>{{ yarn.fiber }}</p>
        <p>{{ yarn.source_name }}</p>
        <p>{{ yarn.cost }}</p>
        <p>{{ yarn.owned }}</p>
        <p>{{ yarn.note }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yarn-item',
  props: ['yarn'],
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
  height: 400px;
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
