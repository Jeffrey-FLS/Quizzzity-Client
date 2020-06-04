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

    // state = {
    //     questionForm: {
    //         question: "",
    //         questionType: "",
    //         singleMultiple: "",
    //         correctAnswer: "",
    //         answerOne: "",
    //         answerTwo: "",
    //         answerThree: ""
    //     },
    //     questionFormCtrl: {
    //         validation: new Array(7).fill(false)
    //     }
    // };



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
                <input type="text" placeholder="Write your question here" name="question"
                       onChange={this.props.handleState}/>

                <div className="create-quiz_-_forms_--_select-half">
                    <select name="questionType" onChange={this.props.handleState}>
                        <option value="blank">Question Type</option>
                        <option value="select-questions">Select Questions</option>
                        <option value="draggable">Draggable</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_select-half">
                    <select name="singleMultiple" onChange={this.props.handleState}>
                        <option value="blank">Answer Type</option>
                        <option value="single-answer">Single Answer</option>
                        <option value="multiple-answer">Multiple Answer</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_answers">
                    <input type="text" placeholder="Write the correct Answer" name="correctAnswer"
                           onChange={this.props.handleState}/>

                    <input type="text" placeholder="Write the wrong answer" name="answerOne"
                           onChange={this.props.handleState}/>

                    <input type="text" placeholder="Write the wrong answer" name="answerTwo"
                           onChange={this.props.handleState}/>

                    <input type="text" placeholder="Write the wrong answer" name="answerThree"
                           onChange={this.props.handleState}/>
                </div>
            </form>
        )
    }
}

// export default FormStepTwo;