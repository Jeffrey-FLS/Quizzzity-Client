
import axios from 'axios'
// import { API } from '../helpers';
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const userService = {
    fetchUsers,
    createUser,
    login
};

async function fetchUsers() {
    return await axios.get(`${BASE_URL}/user`)
            .then(resp => resp.data)
            .catch(error => Promise.reject(error));
}


async function createUser(user) {
    console.log(`
        USER VALUE IS ${JSON.stringify(user)}
    `);

    const config = {
        user: user
    };

    return await axios.post(`${BASE_URL}/users`, config)
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

    return await axios.get(`${BASE_URL}`)
        .then(resp => resp.data)
        .catch(error => Promise.reject(error));
}

export default userService;
