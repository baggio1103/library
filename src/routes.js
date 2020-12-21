import Vue from "vue";
import Router from "vue-router";
import GenreList from "./components/Genres/GenreList";
import Genre from "./components/Genres/Genre";
import AuthorList from "./components/Authors/AuthorList"
import Author from "./components/Authors/Author"
import ClientList from "./components/Clients/ClientList"
import Client from "./components/Clients/Client"
import BookList from "./components/Books/BookList"
import Book from "./components/Books/Book"
import BookRentList from "./components/BookRents/BookRentList"
import BookRent from "./components/BookRents/BookRent"

import MainPage from "./components/MainPage"



Vue.use(Router);

const router = new Router({
    mode: 'history', // Use browser history
    routes: [

        {
            path: "",
            name: "MainPage",
            component : MainPage
        },

        {
            path: "/genres",
            name: "GenreList",
            component: GenreList,
        },

        {
            path: "/genres/:id",
            name: "Genre Details",
            component: Genre,
        },

        {
            path: "/authors",
            name: "AuthorList",
            component: AuthorList,
        },

        {
            path: "/authors/:id",
            name: "Author Details",
            component: Author,
        },

        {
            path: "/clients",
            name: "ClientList",
            component: ClientList,
        },

        {
            path: "/clients/:id",
            name: "Client Details",
            component: Client,
        },

        {
            path: "/books",
            name: "BookList",
            component: BookList,
        },

        {
            path: "/books/:id",
            name: "Book Details",
            component: Book,
        },

        {
            path: "/bookRents",
            name: "BookRentList",
            component: BookRentList,
        },

        {
            path: "/bookRents/:id",
            name: "BookRent Details",
            component: BookRent,
        },

    ]
});

export default router;