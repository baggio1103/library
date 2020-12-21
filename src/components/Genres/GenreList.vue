<template>
    <div>
        <div class="container">
        <h2><br>All genres</h2>
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="genre in genres" v-bind:key="genre.id">
           
            <td>{{genre.id}}</td>
           
            <td>{{genre.name}}</td>
           
            <td>
                <button class="btn btn-danger" v-on:click="deleteGenreById(genre.id)">Delete</button>
            </td>
           
            <td>
                <button class="btn btn-primary" v-on:click="updateGenreById(genre.id)">Update</button>
            </td>

            </tr>
        </tbody>
        </table>

        <div class="row">
            <button class="btn btn-success" v-on:click="addGenreClicked()">Add</button>
        </div>

        <br>
        <div class="row">
            <button class="btn btn-success" v-on:click="goToMainPage()">Main Page</button>
        </div>
        <br>
       </div>
    </div>
</template>

<script>

import GenreDataService from './service/GenreDataService';

export default {
  name: "GenreList",
  data() {
      return {
          genres:[],
          message: null,
      }
  },
  
  methods:{

      refreshCourses(){
          GenreDataService.retrieveAllGenres().
          then(response =>{
            console.log(response.data)
            this.genres = response.data
          });
      },

      deleteGenreById(id){
          GenreDataService.deleteGenreById(id).
          then(response =>{
              console.log(response.data)
              this.message = `Deleting genre by id ${id} has been successful`
              this.refreshCourses();
              })
          },

        updateGenreById(id){
            this.$router.push({name: 'Genre Details', params: {id} })
        },

        addGenreClicked() {
            this.$router.push(`/genres/-1`);
        },

        goToMainPage(){
            this.$router.push(`/`)
        },


  },

  created(){
      this.refreshCourses();
  }

};

</script>

<style>
    @import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);
</style>