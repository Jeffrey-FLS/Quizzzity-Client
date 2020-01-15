
import { usersConstants as C } from "../constants";
import axios from 'axios'
import { API } from '../helpers';

export const userActions = {
    // login,
    // logout,
    fetchUsers
    // getAll,
    // delete: _delete
};



function fetchUsers() {
    return (dispatch) => {
        dispatch(fetchUsersRequest());

        axios.get(`${API.URL}users`)
            .then(data => dispatch(fetchUsersSuccess(data.data)))
            .catch(error => dispatch(fetchUsersFailure(error.message)));
    }
}

const fetchUsersRequest = () => {
    return {
        type: C.FETCH_USERS_REQUEST
    }
};

const fetchUsersSuccess = users => {
    return {
        type: C.FETCH_USERS_SUCCESS,
        payload: users
    }
};

const fetchUsersFailure = error => {
    return {
        type: C.FETCH_USERS_FAILURE,
        payload: error
    }
};