<template>
    <div>
        <h2>All authors</h2>
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Bio</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in authors" v-bind:key="author.id">
           
            <td>{{author.id}}</td>
           
            <td>{{author.name}}</td>
           
            <td>{{author.bio}}</td>

            <td>
                <button class="btn btn-danger" v-on:click="deleteAuthorById(author.id)">Delete</button>
            </td>
           
            <td>
                <button class="btn btn-primary" v-on:click="updateAuthorById(author.id)">Update</button>
            </td>

            </tr>
        </tbody>
        </table>

        <div class="row">
            <button class="btn btn-success" v-on:click="addAuthor()">Add</button>
        </div>

        <hr>

        <div class="row">
            <button class="btn btn-success" v-on:click="goToMainPage()">Main Page</button>
        </div>

    </div>
</template>

<script>

import AuthorDataService from './service/AuthorDataService';

export default {
  name: "AuthorList",
  data() {
      return {
          authors:[],
          message: null,
      }
  },
  
  methods:{
      refreshAuthors(){
          AuthorDataService.retrieveAllAuthors().
          then(response =>{
            console.log(response.data)
            this.authors = response.data
          });
       },

       deleteAuthorById(id){
          AuthorDataService.deleteAuthorById(id).
          then(response =>{
              console.log(response.data)
              this.message = `Deleting genre by id ${id} has been successful`
              this.refreshAuthors();
            })
        },

        updateAuthorById(id){
            this.$router.push({name: 'Author Details', params: {id} } )
        },

        addAuthor(){
            this.$router.push(`/authors/-1`)
        },

        goToMainPage(){
            this.$router.push(`/`)
        },

  },

  created(){
      this.refreshAuthors();
  }

};

</script>

<style>
    @import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);
</style>