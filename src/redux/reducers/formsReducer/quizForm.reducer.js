
// import { quizConstants as C } from "../../constants";

// import { formsConstants } from "../../constants";
import quizFormConstants from "../../constants/forms/quizForm.constants";
import { quizInitialState } from "../../initialStates";

// const C = formsConstants.quiz;
const C = quizFormConstants;
const initialState = quizInitialState;




const quizFormReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case C.CHANGE_TITLE:
            return {...prevState, title: action.payload};

        default: return {...prevState}
    }
};

export default quizFormReducer;