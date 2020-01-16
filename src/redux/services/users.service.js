import axios from 'axios'
import { API } from '../helpers';

export const userService = {
    fetchUsers,
    login
};

async function fetchUsers() {
    return await axios.get(`${API.URL}/user`)
            .then(resp => resp.data)
            .catch(error => Promise.reject(error));
}


//FIXME: login function stills needs work to be done

async function login(username, password) {
    const config = {
        method: 'post',
        url: '/user/',
        data: {
            username: username,
            password: password
        }
    };

    return await axios.get(`${API.URL}`)
        .then(resp => resp.data)
        .catch(error => Promise.reject(error));
}

export default userService;
