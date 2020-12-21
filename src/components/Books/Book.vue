<template>

  <div>
    
    <h3>Book Info</h3>

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
          <label>AuthorId</label>
          <input type="text" class="form-control" v-model="authorId" />
        </fieldset>

        <fieldset class="form-group">
          <label>GenreId</label>
          <input type="text" class="form-control" v-model="genreId" />
        </fieldset>

        <fieldset class="form-group">
          <label>Available</label>
          <input type="text" class="form-control" v-model="available" />
        </fieldset>

        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>

import BookDataService from './service/BookDataService';

export default {
  name: "bookDetails",
  data() {

    return {
      name: "",
      genreId: "",
      authorId: "",
      available: "",
      errors: []
    };

  },

  computed: {
    id() {
      return parseInt(this.$route.params.id);
    }
  },

  methods: {

    refreshBookDetails(){
      BookDataService.retrieveBook(this.id).then(res =>{
        this.name = res.data.name;
        this.authorId = res.data.authorId;
        this.genreId = res.data.genreId;
        this.available = res.data.available;
      })
    },

    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.name) {
        this.errors.push("Enter valid values for name");
      }
      
      if(!this.authorId || parseInt(this.authorId) < 0){
        this.errors.push("Enter valid values for authorId")
      }

      if(parseInt(this.genreId) < 0 || !this.genreId){
        this.errors.push("Enter valid values genreId")
      }
      
      if(parseInt(this.available) < 0 || !this.available){
        this.errors.push("Enter valid values available")
      }

      if (this.errors.length === 0) {
        if (this.id === -1) {
            BookDataService.createBook(
            {
                name : this.name,
                authorId : this.authorId,
                genreId : this.genreId,
                available : this.available
            }
            ).then(() => {
                this.$router.push("/books")
            })
        } 
        else {
          BookDataService.updateBookById(this.id, {  
            id: this.id,
                name : this.name,
                authorId : this.authorId,
                genreId : this.genreId,
                available : this.available
          }).then(() => {
            this.$router.push("/books");
          });
        }
      }
    }
    
  },
  created() {
    this.refreshBookDetails();
  }
};

</script>

<style>
</style>