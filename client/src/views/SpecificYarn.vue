<template>
  <b-container class="col-12 col-md-10 col-xl-8">
    <h3>{{yarn.name}}</h3>
    <b-container class="inner-box">
       <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
          <p class="attribute">Yarn name: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
          <p>{{ yarn.name }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Source: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ yarn.source_name }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Yarn cost: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>€{{ yarn.cost }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Owned: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ yarn.owned }} </p>
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
            @click="editYarn">Update</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Yarn Brand: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ yarn.brand }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Yarn Color: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ yarn.color }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Yarn Weight: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ yarn.weight }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Yarn Fiber: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
        <p>{{ yarn.fiber }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-2 col-md-2 col-xl-2">
        <p class="attribute">Note: </p>
        </b-col>
        <b-col class="col-3 col-md-3 col-xl-3">
          <p>{{ yarn.note }}</p>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'specificyarn',

  mounted() {
    this.yarnID = this.$route.params.id
    console.log('PAGE is loaded', this.yarnID)

    this.loadSpecificYarn()
  },
  data() {
    return {
      message: 'none',
      yarn: null,
      userName: localStorage.userName,
      userID: localStorage.userID,
      yarnID: null,
      ownedNew: '',
      ownedOptions: [
        { value: null, text: 'Please select an option', disabled: true },
        { value: true, text: 'Yes, I own this yarn' },
        { value: false, text: 'No, I don\'t own this yarn' }
      ]
    }
  },
  methods: {

    loadSpecificYarn() {
      Api.get('/yarns/' + this.yarnID)
        .then(response => {
          this.yarn = response.data
          this.yarnID = this.yarn._id
          console.log('loaded yarn', this.yarn)
        })
    },

    editYarn() {
      console.log('The yarnID is ' + this.yarnID)
      Api.patch('/yarns/' + this.yarnID, {
        owned: this.ownedNew
      })
        .then((response) => {
          console.log(response)
          // alert('The yarn\'s owned status has been changed')
          this.loadSpecificYarn()
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
