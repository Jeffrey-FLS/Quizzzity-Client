
import { combineReducers } from 'redux';
import testReducer from './test.reducer';
import usersReducer from './users.reducers';

const rootReducer = combineReducers({
    tests: testReducer,
    users: usersReducer
});

export default rootReducer;