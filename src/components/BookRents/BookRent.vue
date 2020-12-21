<template>

  <div>
    
    <h3>BookRent Info</h3>

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
          <label>Book ID</label>
          <input type="text" class="form-control" v-model="bookId" />
        </fieldset>

        <fieldset class="form-group">
          <label>Client ID</label>
          <input type="text" class="form-control" v-model="clientId" />
        </fieldset>

        <fieldset class="form-group">
          <label>Start Of Rent</label>
          <input type="text" class="form-control" v-model="startOfRent" />
        </fieldset>

        <fieldset class="form-group">
          <label>End Of Rent</label>
          <input type="text" class="form-control" v-model="endOfRent" />
        </fieldset>

        <button class="btn btn-success" type="submit">Save</button>
        
      </form>
    </div>
  </div>
</template>

<script>

import BookRentDataService from './service/BookRentDataService';

export default {
  name: "bookRentDetails",
  data() {

    return {
      bookId: "",
      clientId: "",
      startOfRent : "",
      endOfRent: "",
      errors: []
    };

  },

  computed: {
    id() {
      return parseInt(this.$route.params.id);
    }
  },

  methods: {

    refreshBookRentDetails(){
      BookRentDataService.retrieveBookRent(this.id).then(res =>{
          this.bookId = res.data.bookId;
          this.clientId = res.data.clientId;
          this.startOfRent = res.data.startOfRent;
          this.endOfRent = res.data.endOfRent;
      })
    },

    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];

      if(!this.bookId || parseInt(this.bookId) < 0){
        this.errors.push("Enter valid values for book Id")
      }

      if(parseInt(this.clientId) < 0 || !this.clientId){
        this.errors.push("Enter valid values for client Id")
      }

      if(!this.startOfRent){
        this.errors.push("Enter valid values for Start of Rent")
      }
      if(!this.endOfRent){
        this.errors.push("Enter valid values for End of Rent")
      }

      if (this.errors.length === 0) {
        if (this.id === -1) {
            BookRentDataService.createBookRent(
            {
                bookId : this.bookId,
                clientId : this.clientId,
                startOfRent : this.startOfRent,
                endOfRent : this.endOfRent
            }
            ).then(() => {
                this.$router.push("/bookRents")
            })
        } 
        else {
          BookRentDataService.updateBookRentById(this.id, {  
                id: this.id,
                bookId : this.bookId,
                clientId : this.clientId,
                startOfRent : this.startOfRent,
                endOfRent : this.endOfRent
          }).then(() => {
            this.$router.push("/bookRents");
          });
        }
      }
    }
    
  },
  created() {
    this.refreshBookRentDetails();
  }
};

</script>

<style>
</style>