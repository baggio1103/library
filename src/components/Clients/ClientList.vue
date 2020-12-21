<template>
    <div>
        <h2>All Clients</h2>
        <table class="table table-striped">

        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="client in clients" v-bind:key="client.id">
           
                <td>{{client.id}}</td>
            
                <td>{{client.name}}</td>

                <td>{{client.email}}</td>
            
                <td>
                    <button class="btn btn-danger" v-on:click="deleteClientById(client.id)">Delete</button>
                </td>
            
                <td>
                    <button class="btn btn-primary" v-on:click="updateClientById(client.id)">Update</button>
                </td>

            </tr>

        </tbody>
        </table>

        <div class="row">
            <button class="btn btn-success" v-on:click="createClient()">Add</button>
        </div>

        <hr>
        <div class="row">
            <button class="btn btn-success" v-on:click="goToMainPage()">MainPage</button>
        </div>

    </div>
</template>

<script>

import ClientDataService from './service/ClientDataService';

export default {
  name: "ClientList",
  data() {
      return {
          clients:[],
          message: null,
      }
  },
  
  methods:{

      refreshClients(){
          ClientDataService.retrieveAllClients().
          then(response =>{
            console.log(response.data)
            this.clients = response.data
          });
      },

      deleteClientById(id){
          ClientDataService.deleteClientById(id).
          then(response =>{
              console.log(response.data)
              this.message = `Deleting client by id ${id} has been successful`
              this.refreshClients();
          })
      },

        updateClientById(id){
            this.$router.push({name: 'Client Details', params: {id} })
        },

        createClient() {
            this.$router.push(`/clients/-1`);
        },

        goToMainPage(){
            this.$router.push('/')
        }

  },

  created(){
      this.refreshClients();
  }

};

</script>

<style>
    @import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);
</style>