
import { usersConstants as C } from "../constants/";

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default: return state
    }
};

export default usersReducer;