// React Components
import React, {Component} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';

// Assets
// import './CreateQuizNav.component.scss';


export class FormStepThree extends Component {

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
                <input type="text" placeholder="Write your question here"
                       onChange={this.handleOnChangeTextInput}/>

                <div className="create-quiz_-_forms_--_select">
                    <select>
                        <option value="0">Select</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                        <option value="4">Ford</option>
                        <option value="5">Honda</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_input-file">
                    <h6>Upload Image</h6>

                    <div className="create-quiz_-_forms_--_input-file-btn">
                        <FaRegImages
                            className="create-quiz_-_forms_--_input-file-btn_icon"/>
                        <input type="file" name="myfile"
                               onChange={this.handleOnChangeFileInput}/>
                        <p>+ Add Quiz Image</p>
                    </div>
                </div>
            </form>
        )
    }
}

// export default FormStepThree;