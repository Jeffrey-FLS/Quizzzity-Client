
import { usersConstants as C } from "../constants";
import { userService } from "../services/";

import { history } from "../helpers";

export const userActions = {
    fetchUsers,
    createUser
    // login
    // logout,
};


function fetchUsers() {
    return (dispatch) => {
        dispatch(request());

        userService.fetchUsers()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
                );
    };

    function request() {return {type: C.FETCH_USERS_REQUEST}}
    function success(users) {return {type: C.FETCH_USERS_SUCCESS, payload: users}}
    function failure(error) {return {type: C.FETCH_USERS_FAILURE, payload: error}}

    // function fetchUsersRequest() {return {type: C.FETCH_USERS_REQUEST}}

    // function fetchUsersSuccess(users) {
    //     return {type: C.FETCH_USERS_SUCCESS, payload: users}
    // }

    // function fetchUsersFailure(error) {
    //     return {type: C.FETCH_USERS_FAILURE, payload: error}
    // }

}

function createUser(user) {
    return (dispatch) => {
        dispatch(request());

        userService.createUser(user)
            .then(
                users => {
                    dispatch(success(users));
                    history.push('/login');
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() {return {type: C.FETCH_USERS_REQUEST}}
    function success(users) {return {type: C.FETCH_USERS_SUCCESS, payload: users}}
    function failure(error) {return {type: C.FETCH_USERS_FAILURE, payload: error}}
}

//FIXME: login function unfinished

// function login(username, password) {
//     return (dispatch) => {
//         dispatch(request());
//
//         userService.login(username, password)
//             .then(
//                 users => dispatch(fetchUsersSuccess(users)),
//                 error => dispatch(fetchUsersFailure(error.toString()))
//             );
//     }
// }

// function fetchUsers() {
//     return (dispatch) => {
//         dispatch(fetchUsersRequest());
//
//         axios.get(`${API.URL}users`)
//             .then(data => dispatch(fetchUsersSuccess(data.data)))
//             .catch(error => dispatch(fetchUsersFailure(error.message)));
//     }
// }
//
// const fetchUsersRequest = () => {
//     return {
//         type: C.FETCH_USERS_REQUEST
//     }
// };

// const fetchUsersSuccess = users => {
//     return {
//         type: C.FETCH_USERS_SUCCESS,
//         payload: users
//     }
// };
//
// const fetchUsersFailure = error => {
//     return {
//         type: C.FETCH_USERS_FAILURE,
//         payload: error
//     }
// };