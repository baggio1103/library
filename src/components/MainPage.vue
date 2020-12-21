<template>
    <div>
        <br><h2>Welcome to Online Library</h2><br>
        <table class="table table-striped">

        <thead>
            <tr>
                <th scope="col">Genres</th>
                <th scope="col">Authors</th>
                <th scope="col">Books</th>
                <th scope="col">Clients</th>
                <th scope="col">Book Rents</th>
            </tr>

        </thead>

        <tbody>
            <tr>
           
                <td>
                    <button class="btn btn-danger" @click="goToGenres()">Genres</button>
                </td>
            
                <td>
                    <button class="btn btn-success" @click="goToAuthors()">Authors</button>
                </td>

                <td>
                    <button class="btn btn-primary" @click="goToBooks()">Books</button>
                </td>

                <td>
                    <button class="btn btn-secondary" @click="goToClients()" >Clients</button>
                </td>

                <td>
                    <button class="btn btn-warning" @click="goToBookRents()">BookRents</button>
                </td>

            </tr>
        </tbody>
        </table>

    </div>
</template>

<script>
export default {   
    methods:{
        goToGenres(){
            this.$router.push("/genres")            
        },

        goToClients(){
            this.$router.push("/clients")            
        },

        goToBooks(){
            this.$router.push("/books")            
        },

        goToAuthors(){
            this.$router.push("/authors")            
        },

        goToBookRents(){
            this.$router.push("/bookRents")            
        },


    }
}
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
</style>