// React Components
import React, {Component, Fragment} from 'react';

// Libs Components
import {
    FaPlusCircle
} from 'react-icons/fa';

// Assets
import './FormCreateQuestion.component.scss';


export class FormCreateQuestion extends Component {

    render() {
        return (
            <Fragment>
                <div className="create-quiz_-_forms-create-question">
                    <h6>One question is required to create quiz</h6>

                    <button onClick={() => {this.props.setAddQuestion(false)}}>
                        <FaPlusCircle className="create-quiz_-_forms-create-question_--_icon"/>
                        <h5>Click to add question</h5>
                    </button>
                </div>
            </Fragment>
        )
    }
}

