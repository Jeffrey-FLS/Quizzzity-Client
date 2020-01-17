// React Components
import React, {Component} from 'react';

// Libs Components
import {
    FaSearch,
    FaPlusCircle,
    FaRegUserCircle,
    FaBell
} from 'react-icons/fa';


// Assets
import './CreateQuizPage.component.scss';


class CreateQuizPage extends Component {


    render() {
        return (
            <div className="create-quiz container">
                <div className="row">
                    <div className="create-quiz_-_nav col-1">
                        <div className="create-quiz_-_nav_--_step-1 active">
                            <h3>1</h3>
                        </div>

                        <div className="create-quiz_-_nav_--_step-2">
                            <h3>2</h3>
                        </div>

                        <div className="create-quiz_-_nav_--_step-3">
                            <h3>3</h3>
                        </div>
                    </div>

                    <div className="create-quiz_-_forms offset-1 col-5">
                        <h2>Create New Quiz</h2>

                        <form action="" className="create-quiz_-_forms_--_step1">
                            <input type="text" placeholder="Title"/>

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

                        </form>
                    </div>

                    <div className="create-quiz_-_view col-4 offset-1">
                        View Panel
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateQuizPage;