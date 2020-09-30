<template>
  <div>
    <p>Welcome to Knit Happens, {{ name }}</p>
    <p>{{}}</p>
    <div class="container">
      <div id="media-list">
        <h1>{{ title }}</h1>
        <select v-on:change="filterList">
          <option value="">Select a type of media...</option>
         <!-- <option v-for="media in uniqueItemsList">{{ projectList }}</option>-->
        </select>
        <ul>
         <!-- <li
            v-on:click="toggleDetails(media)"
            v-for="media in mediaList"
            v-show="type === '' || media.type == type"
            v-bind:class="[media.showDetail ? 'less' : 'more', media.type]"
          > -->
            <h3>{{ media.title }}</h3>
            <div v-show="media.showDetail">
              <p>{{ media.description }}</p>
              <p v-if="media.contributor" class="byline">
                By: {{ media.contributor }}
              </p>
            </div>
          <!--</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Projects from '@/views/Projects'

export default {
  name: 'home',
  components: {
    Projects
  },
  data() {
    return {
      name: 'TEST'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then((response) => {
          this.message = response.data.message
        })
        .catch((error) => {
          this.message = error
        })
    },
    toggleDetails: function (projectList) {
      projectList.showDetail = !projectList.showDetail
    },
    filterList: function (event) {
      this.type = event.target.value
    }
  },
  computed: {
    uniqueItemsList: function () {
      const types = []
      this.mediaList.forEach((item) => {
        if (!types.includes(item.type)) {
          types.push(item.type)
        }
      })
      return types
    }
  }
}

const projectList = [
  {
    projectName: 'Project 1',
    status: 'not started',
    priority: 'low'
  },
  {
    projectName: 'Project 2',
    status: 'in progress',
    priority: 'high'
  }
]
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
