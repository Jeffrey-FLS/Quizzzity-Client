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
            answers: [
                "answerOne",
                "answerTwo",
                "answerThree",
                "answerFour"
            ],
            correctAnswer: 0
        },

        formCtrls: {
            addQuestion: false
        }
    };

    render() {
        return (
            <form action="" className="create-quiz_-_forms_--_step1">
                <input type="text" placeholder="Write your question here" name="question"
                       onChange={this.handleOnChangeTextInput}/>

                <div className="create-quiz_-_forms_--_select-half">
                    <select>
                        <option value="0">Question Type</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                        <option value="4">Ford</option>
                        <option value="5">Honda</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_select-half">
                    <select>
                        <option value="0">Single Answer</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                        <option value="4">Ford</option>
                        <option value="5">Honda</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_answers">
                    <input type="text" placeholder="Write the correct Answer" name="question"
                           onChange={this.handleOnChangeTextInput}/>

                    <input type="text" placeholder="Write the wrong answer" name="question"
                           onChange={this.handleOnChangeTextInput}/>

                    <input type="text" placeholder="Write the wrong answer" name="question"
                           onChange={this.handleOnChangeTextInput}/>

                    <input type="text" placeholder="Write the wrong answer" name="question"
                           onChange={this.handleOnChangeTextInput}/>
                    {/*<label className="container-check">One*/}
                    {/*    <input type="checkbox" checked="checked" />*/}
                    {/*    <span className="checkmarker"></span>*/}
                    {/*</label>*/}
                </div>
            </form>
        )
    }
}

// export default FormStepTwo;