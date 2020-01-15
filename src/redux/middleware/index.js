import { applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const combinedMiddleware = applyMiddleware(
    logger,
    thunk
);

export default combinedMiddleware;