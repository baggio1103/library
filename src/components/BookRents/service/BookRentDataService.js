import axios from "axios"

const URL = "http://localhost:8080/bookRents";

class BookRentDataService {

  retrieveAllBookRents(){  
    return axios.get(`${URL}`);
  }

  retrieveBookRent(id){
    return axios.get(`${URL}/${id}`)
  }


  deleteBookRentById(id){
    return axios.delete(`${URL}/${id}`)
  }

  updateBookRentById(id, bookRent){
    return axios.put(`${URL}/${id}`, bookRent);
  }

  createBookRent(bookRent){
    return axios.post(`${URL}`, bookRent)
  }

}

export default new BookRentDataService();