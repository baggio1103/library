<template>
    <div>
        <h2>All Books</h2>
        <table class="table table-striped">

        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Book-ID</th>
            <th scope="col">Client-ID</th>
            <th scope="col">Start Of Rent</th>
            <th scope="col">End Of Rent</th>

            </tr>
        </thead>

        <tbody>
            <tr v-for="bookRent in bookRents" v-bind:key="bookRent.id">
           
                <td>{{bookRent.id}}</td>
            
                <td>{{bookRent.bookId}}</td>

                <td>{{bookRent.clientId}}</td>
            
                <td>{{bookRent.startOfRent}}</td>

                <td>{{bookRent.endOfRent}}</td>

                <td>
                    <button class="btn btn-danger" v-on:click="deleteBookRentById(bookRent.id)">Delete</button>
                </td>
            
                <td>
                    <button class="btn btn-primary" v-on:click="updateBookRentById(bookRent.id)">Update</button>
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

import BookRentDataService from './service/BookRentDataService';


export default {
  name: "BookRentList",
  data() {
      return {
          bookRents:[],
          message: null,
      }
  },
  
  methods:{

      refreshBookRents(){
          BookRentDataService.retrieveAllBookRents().
          then(response =>{
            console.log(response.data)
            this.bookRents = response.data
          });
      },

      deleteBookRentById(id){
          BookRentDataService.deleteBookRentById(id).
          then(response =>{
              console.log(response.data)
              this.message = `Deleting client by id ${id} has been successful`
              this.refreshBookRents();
          })
      },

      updateBookRentById(id){
          this.$router.push({name: 'BookRent Details', params: {id} })
      },

      createBook() {
          this.$router.push('/bookRents/-1');
      },

        goToMainPage(){
            this.$router.push('/')
        },

  },

  created(){
      this.refreshBookRents();
  }

};

</script>

<style>
    @import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);
</style>