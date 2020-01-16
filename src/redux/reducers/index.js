
import { combineReducers } from 'redux';
import testReducer from './test.reducer';
import usersReducer from './users.reducer';
import quizReducer from './quiz.reducer';

const rootReducer = combineReducers({
    tests: testReducer,
    users: usersReducer,
    quizzes: quizReducer
});

export default rootReducer;