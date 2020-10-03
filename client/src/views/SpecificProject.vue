<template>
  <b-container class="coll-12 col-md-10 col-xl-8 shy-box">
    <img src="../assets/cat-with-yarn.png">
    <h2>Welcome to your projects page, {{localStorage.userName}}!</h2>
  <b-row>
  </b-row>
  <b-row>
  </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
// import { Api } from '@/Api'

export default {
  name: 'account',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {

  }
}
</script>

<style>
  h2 {
    color: #2D3E4E;
  }

  .bold-box {
    color: #2D3E4E;
  }

  .shy-box {
    background: #8CBDB9;
   /* display: flex;*/
    justify-content: center;
    align-items: center;
    padding: 4em 4em 4em 4em;
    margin: 4em 4em 4em 4em;
  }
</style>
