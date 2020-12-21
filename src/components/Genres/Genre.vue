<template>
  <div>
    <h3>Genre</h3>
    <div class="container">

      <form @submit="validateAndSubmit">

        <div v-if="errors.length">
          <div
            class="alert alert-warning"
            v-bind:key="index"
            v-for="(error, index) in errors"
          >{{error}}</div>
        </div>
      
        <fieldset class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="name" />
        </fieldset>

        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>

import GenreDataService from './service/GenreDataService';

export default {
  name: "genreDetails",
  data() {

    return {
      name: "",
      errors: []
    };

  },

  computed: {
    id() {
      return parseInt(this.$route.params.id);
    }
  },

  methods: {
    refreshGenreDetails() {
      GenreDataService.retrieveGenre(this.id).then(res => {
        this.name = res.data.name;
      });
    },

    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.name) {
        this.errors.push("Enter valid values");
      }

      if (this.errors.length === 0) {
        if (this.id === -1) {
            GenreDataService.createGenre(
            {
                name : this.name
            }
            ).then(() => {
                this.$router.push("/genres")
            })
        } 
        else {
          GenreDataService.updateGenre(this.id, {
            id: this.id,
            name: this.name
          }).then(() => {
            this.$router.push("/genres");
          });
        }
      }
    }
  }
  ,
  created() {
    this.refreshGenreDetails();
  }
};
</script>

<style>
</style>