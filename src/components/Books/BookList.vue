<template>
    <div>
        <h2>All Books</h2>
        <table class="table table-striped">

        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">AuthorId</th>
            <th scope="col">GenreId</th>
            <th scope="col">Available</th>

            </tr>
        </thead>

        <tbody>
            <tr v-for="(book) in books" v-bind:key="book.id">
           
                <td>{{book.id}}</td>
            
                <td>{{book.name}}</td>

                <td>{{book.authorId}}</td>
            
                <td>{{book.genreId}}</td>

                <td>{{book.available}}</td>

                <td>
                    <button class="btn btn-danger" v-on:click="deleteBookById(book.id)">Delete</button>
                </td>
            
                <td>
                    <button class="btn btn-primary" v-on:click="updateBookById(book.id)">Update</button>
                </td>

            </tr>

        </tbody>
        </table>

        <div class="row">
            <button class="btn btn-success" v-on:click="createBook()">Add</button>
        </div>

        <hr>
        <div class="row">
            <button class="btn btn-success" v-on:click="goToMainPage()">Main Page</button>
        </div>

    </div>
</template>

<script>

import BookDataService from './service/BookDataService';

export default {
  name: "BookList",
  data() {
      return {
          books:[],
          message: null,
      }
  },
  
  methods:{

      refreshBooks(){

          BookDataService.retrieveAllBooks().
          then(response =>{
            this.books = response.data
          });
      },

      deleteBookById(id){
          BookDataService.deleteBookById(id).
          then(response =>{
              console.log(response.data)
              this.message = `Deleting client by id ${id} has been successful`
              this.refreshBooks();
          })
      },

        updateBookById(id){
            this.$router.push({name: 'Book Details', params: {id} })
        },

        createBook() {
            this.$router.push('/books/-1');
        },

        goToMainPage(){
            this.$router.push('/')
        },


  },

  created(){
      this.refreshBooks();
  }

};

</script>

<style>
    @import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);
</style>