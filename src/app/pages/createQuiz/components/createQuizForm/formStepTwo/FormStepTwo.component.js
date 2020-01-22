// React Components
import React, {Component} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave,
    FaCheck
} from 'react-icons/fa';

// Assets
import './FormStepTwo.component.scss';


export class FormStepTwo extends Component {

    state = {
        questionForm: {
            question: "",
            questionType: "",
            singleMultiple: "",
            correctAnswer: "",
            answerOne: "",
            answerTwo: "",
            answerThree: ""
        },
        questionFormCtrl: {
            validation: new Array(7).fill(false)
        }
    };



    // Horrible looking code belowm please DO NOT LOOK!

    // handleOnChange = (event) => {
    //
    //     console.log(`
    //         EVENT.TARGET.VALUE IS ${event.target.value}
    //     `);
    //
    //     let payload = event.target.value;
    //     var bool = false;
    //     var index = 0;
    //
    //
    //     switch (event.target.name) {
    //         case "question":
    //             index = 0;
    //             bool = (payload !== undefined);
    //         case "questionType":
    //             return false;
    //         default:
    //             return false;
    //     }
    //
    //     this.setState({
    //         questionFormCtrl: {
    //             validation: this.questionFormCtrl.validation[index] = bool
    //         }
    //     });
    // };

    render() {

        return (
            <form action="" className="create-quiz_-_forms_--_step1">
                <input type="text" placeholder="Write your question here" name="question"/>

                <div className="create-quiz_-_forms_--_select-half">
                    <select name="questionType">
                        <option value="0">Question Type</option>
                        <option value="select-questions">Select Questions</option>
                        <option value="draggable">Draggable</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_select-half">
                    <select name="singleMultiple">
                        <option value="0">Answer Type</option>
                        <option value="single-answer">Single Answer</option>
                        <option value="multiple-answer">Multiple Answer</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_answers">
                    <input type="text" placeholder="Write the correct Answer" name="correctAnswer"/>

                    <input type="text" placeholder="Write the wrong answer" name="answerOne"/>

                    <input type="text" placeholder="Write the wrong answer" name="answerTwo"/>

                    <input type="text" placeholder="Write the wrong answer" name="answerThree"/>
                </div>
            </form>
        )
    }
}

// export default FormStepTwo;