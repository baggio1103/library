import axios from "axios"

const URL = "http://localhost:8080/genres";

class GenreDataService {

  retrieveAllGenres() {
    return axios.get(`${URL}`);
  }

  retrieveGenre(id){
    return axios.get(`${URL}/${id}`)
  }


  deleteGenreById(id){
    return axios.delete(`${URL}/${id}`)
  }

  updateGenre(id, genre){
    return axios.put(`${URL}/${id}`,genre);
  }

  createGenre(genre){
    return axios.post(`${URL}`,genre)
  }

}

export default new GenreDataService();