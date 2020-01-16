
import { usersConstants as C } from "../constants/";

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        // Fetch Users
        case C.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case C.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        case C.FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            };

        case C.LOGIN_REQUEST:
            return{

            };


        //FIXME: Reducers are not finished








        default: return state
    }
};

export default usersReducer;