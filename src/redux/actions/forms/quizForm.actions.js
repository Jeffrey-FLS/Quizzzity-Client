
import formsConstants from "../../constants/forms";
const C = formsConstants.quiz;

const quizFormActions = {
    changeTitle
};

function changeTitle(title) {
       return {
           type: C.CHANGE_TITLE,
           payload: title
       }
}

export default quizFormActions;