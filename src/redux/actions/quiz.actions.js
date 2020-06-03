
import { quizConstants as C } from "../constants";
import { quizService } from "../services/";

import { history } from "../helpers";

// import { createBrowserHistory } from 'history';
//
// export const history = createBrowserHistory();

export const quizActions = {
    fetchQuizzes,
    createQuiz
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
    function success(quizzes) {return {type: C.FETCH_QUIZZES_SUCCESS, payload: quizzes}}
    function failure(error) {return {type: C.FETCH_QUIZZES_FAILURE, payload: error}}
}

function createQuiz(quiz, questions) {
    return (dispatch) => {
        dispatch(request());

        quizService.createQuiz(quiz, questions)
            .then(
                quizzes => {
                    dispatch(success(quizzes));
                    // console.log(`
                    //     HISTORY IS ${JSON.stringify(history)}
                    //  `);
                    history.push('/home');
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() {return {type: C.CREATE_QUIZZES_REQUEST}}
    function success(quizzes) {return {type: C.CREATE_QUIZZES_SUCCESS, payload: quizzes}}
    function failure(error) {return {type: C.CREATE_QUIZZES_FAILURE, payload: error}}
}
