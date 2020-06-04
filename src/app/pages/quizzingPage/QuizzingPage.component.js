// React Components
import React, {Component} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';

// Assets
import './QuizzingPage.component.scss';

// import Switch from '@material-ui/core/Switch';

class QuizzingPage extends Component {

    render() {

        return (
            <div className="quizzingPage">
                <div className="container">
                    <div className="row">
                        <div className="quizzingPage_-_question-board col-12">
                            <h3>Some Questions Here</h3>
                        </div>

                        <div className="quizzingPage_-_questions-group offset-1 col-10 offset-1">
                            <div className="row">
                                <div className="quizzingPage_-_questions col-12">
                                    <div className="row">
                                        <div className="quizzingPage_-_question col-6">
                                            <button>Answer A</button>
                                        </div>

                                        <div className="quizzingPage_-_question col-6">
                                            <button>Answer B</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="quizzingPage_-_questions col-12">
                                    <div className="row">
                                        <div className="quizzingPage_-_question col-6">
                                            <button>Answer C</button>
                                        </div>

                                        <div className="quizzingPage_-_question col-6">
                                            <button>Answer D</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizzingPage;