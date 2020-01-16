
import { quizConstants as C } from "../constants";
import { quizService } from "../services/";

export const quizActions = {
    fetchQuizzes
};


function fetchQuizzes() {
    return (dispatch) => {
        dispatch(request());

        quizService.fetchQuizzes()
            .then(
                quizzes => dispatch(success(quizzes)),
                error => dispatch(failure(error.toString()))
                );
    };

    function request() {return {type: C.FETCH_QUIZZES_REQUEST}}

    function success(quizzes) {
        return {type: C.FETCH_QUIZZES_SUCCESS, payload: quizzes}
    }

    function failure(error) {
        return {type: C.FETCH_QUIZZES_FAILURE, payload: error}
    }
}
