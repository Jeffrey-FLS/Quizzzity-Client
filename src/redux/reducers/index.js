
import { combineReducers } from 'redux';
import testReducer from './test.reducer';
import usersReducer from './users.reducer';
import quizReducer from './quiz.reducer';
// import formsReducer from "./formsReducer";
import quizFormReducer from "./formsReducer/quizForm.reducer";

const rootReducer = combineReducers({
    tests: testReducer,
    users: usersReducer,
    quizzes: quizReducer,
    form: quizFormReducer
});

export default rootReducer;