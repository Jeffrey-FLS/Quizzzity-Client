import axios from 'axios'
import { API } from '../helpers';

export const userService = {
    fetchUsers
};

function fetchUsers() {
    return axios.get(`${API.URL}user`)
            .then(resp => resp.data)
            .catch(error => Promise.reject(error));
}

export default userService;
