<template>

  <div>
    
    <h3>Client Info</h3>

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
          <label>Email</label>
          <input type="text" class="form-control" v-model="email" />
        </fieldset>

        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>

import ClientDataService from './service/ClientDataService';

export default {
  name: "clientDetails",
  data() {

    return {
      name: "",
      email: "",
      errors: []
    };

  },

  computed: {
    id() {
      return parseInt(this.$route.params.id);
    }
  },

  methods: {

    refreshClientDetails(){  
      ClientDataService.retrieveClient(this.id).then(res => {  
        this.name = res.data.name;
        this.email = res.data.email;
      });
    },

    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.name) {
        this.errors.push("Enter valid values for name");
      }
      
      if(!this.email){
        this.errors.push("Enter valid values for email")
      }

      if (this.errors.length === 0) {
        if (this.id === -1) {
            ClientDataService.createClient(
            {
                name : this.name,
                email : this.email
            }
            ).then(() => {
                this.$router.push("/clients")
            })
        } 
        else {
          ClientDataService.updateClient(this.id, {  
            id: this.id,
            name: this.name,
            email: this.email
          }).then(() => {
            this.$router.push("/clients");
          });
        }
      }
    }
    
  },
  created() {
    this.refreshClientDetails();
  }
};

</script>

<style>
</style>