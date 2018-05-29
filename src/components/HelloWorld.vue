<template>
  <div>
      <section class="jumbotron text-center">
          <div class="container">
              <h1>{{ msg }}</h1>
          </div>
          <div class="form-group">
              <input type="text" class="form-control" placeholder="Enter search string" v-model="term">
              <br/>
              <button class="btn btn-primary" @click="doSearch()">Search</button>
          </div>
      </section>
      <div v-if="!error" class="album py-8 bg-light">
          <div class="container">
              <ul class="list-group">
                  <li class="list-group-item" v-for="track in iTunes" v-bind:key="track.trackId">
                      <img :src="track.artworkUrl30">
                      <a class="track-name" target="_blank" :href="track.trackViewUrl">{{ track.trackName }} </a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import ApiService from '../service/ApiService';
export default {
  name: 'HelloWorld',
  data : () => ({
      term: '',
      iTunes: [],
      error: false,
  }),
  props: {
    msg: String
  },
  methods: {
      doSearch() {
          this.iTunes = [];
          this.error = true;
          const apiUrl = `/search?term=${this.term}&media=music&limit=20`;
          ApiService.get(apiUrl)
              .then(resp => {
                  this.iTunes = resp.data.results;
                  this.error = false;
              });
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .jumbotron {
        height: 235px;
    }
    .form-control {
        width: 600px;
        text-align: center;
        margin: auto;
        padding: 10px;
    }
    .list-group-item .track-name {
        padding-left: 8px;
        vertical-align: middle;
    }
</style>
