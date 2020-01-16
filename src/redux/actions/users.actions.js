
import { usersConstants as C } from "../constants";
import { userService } from "../services/";

export const userActions = {
    fetchUsers,
    // login
    // logout,
};


function fetchUsers() {
    return (dispatch) => {
        dispatch(fetchUsersRequest());

        userService.fetchUsers()
            .then(
                users => dispatch(fetchUsersSuccess(users)),
                error => dispatch(fetchUsersFailure(error.toString()))
                );
    };

    function fetchUsersRequest() {return {type: C.FETCH_USERS_REQUEST}}

    function fetchUsersSuccess(users) {
        return {type: C.FETCH_USERS_SUCCESS, payload: users}
    }

    function fetchUsersFailure(error) {
        return {type: C.FETCH_USERS_FAILURE, payload: error}
    }

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