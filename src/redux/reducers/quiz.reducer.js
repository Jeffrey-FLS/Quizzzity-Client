
import { quizConstants as C } from "../constants/";

const initialState = {
    loading: false,
    quizzes: [],
    error: ''
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {

        // Fetch Users
        case C.FETCH_QUIZZES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case C.FETCH_QUIZZES_SUCCESS:
            return {
                loading: false,
                quizzes: action.payload,
                error: ''
            };
        case C.FETCH_QUIZZES_FAILURE:
            return {
                loading: false,
                quizzes: [],
                error: action.payload
            };



        //FIXME: Reducers are not finished








        default: return state
    }
};

export default quizReducer;