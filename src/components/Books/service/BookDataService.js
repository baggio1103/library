import axios from "axios"

const URL = "http://localhost:8080/books";

class BookDataService {

  retrieveAllBooks(){  
    return axios.get(`${URL}`);
  }

  retrieveBook(id){
    return axios.get(`${URL}/${id}`)
  }


  deleteBookById(id){
    return axios.delete(`${URL}/${id}`)
  }

  updateBookById(id, book){
    return axios.put(`${URL}/${id}`, book);
  }

  createBook(book){
    return axios.post(`${URL}`, book)
  }

}

export default new BookDataService();