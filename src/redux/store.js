
import { createStore } from 'redux';
import rootReducer from "../redux/reducers";
import combinedMiddleware from "./middleware";
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    composeWithDevTools(combinedMiddleware)
);

export default store;