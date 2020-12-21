import axios from "axios"

const URL = "http://localhost:8080/authors";

class AuthorDataService {

  retrieveAllAuthors() {
    return axios.get(`${URL}`);
  }

  retrieveAuthor(id){
    return axios.get(`${URL}/${id}`)
  }


  deleteAuthorById(id){
    return axios.delete(`${URL}/${id}`)
  }

  updateAuthor(id, author){
    return axios.put(`${URL}/${id}`,author);
  }

  createAuthor(author){
    return axios.post(`${URL}`,author)
  }

}

export default new AuthorDataService();