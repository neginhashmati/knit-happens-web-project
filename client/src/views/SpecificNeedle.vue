<template>
  <b-container class="col-12 col-md-10 col-xl-8">
    <h3>{{needle.name}}</h3>
    <b-container class="inner-box">
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
          <p class="attribute">Needle name: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
          <p>{{ needle.name }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Source: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ needle.source_name }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Needle cost: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>€{{ needle.cost }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Needle size: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ needle.size }} mm</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Owned: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ needle.owned }}</p>
        </b-col>
        <b-col class="col-5 col-md-5 col-xl-5">
        <b-form inline>
            <b-form-select
            v-model="ownedNew"
            :options="ownedOptions"
            size="sm"
            ></b-form-select>
            <b-button
            type="submit"
            variant="info"
            size="sm"
            @click="editNeedle">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Note: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
          <p>{{ needle.note }}</p>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'specificneedle',

  mounted() {
    this.needleID = this.$route.params.id
    console.log('PAGE is loaded', this.needleID)
    this.loadSpecificNeedle()
  },
  data() {
    return {
      message: 'none',
      needle: null,
      userName: localStorage.userName,
      userID: localStorage.userID,
      needleID: null,
      ownedNew: '',
      ownedOptions: [
        { value: null, text: 'Please select an option', disabled: true },
        { value: true, text: 'Yes, I own this needle' },
        { value: false, text: 'No, I don\'t own this needle' }
      ]
    }
  },
  methods: {

    loadSpecificNeedle() {
      Api.get('/needles/' + this.needleID)
        .then(response => {
          this.needle = response.data
          this.needleID = this.needle._id
          console.log('loaded needle', this.needle)
        })
    },

    editNeedle() {
      console.log('The needleID is ' + this.needleID)
      Api.patch('/needles/' + this.needleID, {
        owned: this.ownedNew
      })
        .then((response) => {
          console.log(response)
          // alert('The needle\'s owned status has been changed')
          this.loadSpecificNeedle()
        }, (error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

  p {
    color: #2D3E4E;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  h3 {
    color: #2D3E4E;
    padding: 40px 10px 40px 10px;
  }

  .attribute {
    font-weight: bold;
  }
  .bold-box {
    color: #2D3E4E;
  }

  .light-box {
    background: #8CBDB9;
    justify-content: center;
    align-items: center;
    padding: 4em 4em 4em 4em;
    margin: 4em 4em 4em 4em;
  }

  .inner-box {
    background: white;
    justify-content: center;
    align-items: center;
    padding: 20px 10px 20px 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
