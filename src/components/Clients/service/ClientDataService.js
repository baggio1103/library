import axios from "axios"

const URL = "http://localhost:8080/clients";

class ClientDataService {

  retrieveAllClients() {
    return axios.get(`${URL}`);
  }

  retrieveClient(id){
    return axios.get(`${URL}/${id}`)
  }


  deleteClientById(id){
    return axios.delete(`${URL}/${id}`)
  }

  updateClient(id, client){
    return axios.put(`${URL}/${id}`, client);
  }

  createClient(client){
    return axios.post(`${URL}`, client)
  }

}

export default new ClientDataService();