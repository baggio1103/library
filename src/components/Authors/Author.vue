<template>

  <div>
    
    <h3>Author</h3>

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

        <fieldset class="form-group">
          <label>Bio</label>
          <input type="text" class="form-control" v-model="bio" />
        </fieldset>

        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>

import AuthorDataService from './service/AuthorDataService';

export default {
  name: "authorDetails",
  data() {

    return {
      name: "",
      bio: "",
      errors: []
    };

  },

  computed: {
    id() {
      return parseInt(this.$route.params.id);
    }
  },

  methods: {
    refreshAuthorDetails(){
      AuthorDataService.retrieveAuthor(this.id).then(res => {
        this.name = res.data.name;
        this.bio = res.data.bio;
      });
    },

    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      
      if (!this.name) {
        this.errors.push("Enter valid values for name");
      }
      
      if(!this.bio){
        this.errors.push("Enter valid values for bio")
      }

      if (this.errors.length === 0) {
        if (this.id === -1) {
            AuthorDataService.createAuthor(
            {
                name : this.name,
                bio  : this.bio
            }
            ).then(() => {
                this.$router.push("/authors")
            })
        } 
        else {
          AuthorDataService.updateAuthor(this.id, {
            id: this.id,
            name: this.name,
            bio: this.bio
          }).then(() => {
            this.$router.push("/authors");
          });
        }
      }
    }
    
  },
  created() {
    this.refreshAuthorDetails();
  }
};

</script>

<style>
</style>