import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:8080/api/v0.1/usuarios";

class UserService{


    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }



}

export default new UserService(); // exportando el objeto