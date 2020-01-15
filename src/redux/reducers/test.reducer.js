
import { testConstants as C } from "../constants";

const defaultState = {
    likes: 2000,
    text: ""
};

function testReducer(prevState = defaultState, action){
    switch(action.type){
        case C.LIKE:
            return {...prevState, likes: prevState.likes + 1};
        case C.DISLIKE:
            return {...prevState, likes: prevState.likes - 1};
        case C.CHANGE_TEXT:
            return {...prevState, [action.payload.name]: action.payload.newText};
        default:
            return prevState
    }
}

export default testReducer;