// React Components
import React, {Component} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';

// Assets
import './CreateQuizPage.component.scss';
// import imgPlaceholder from '../../../assets/images/img-placeholder.png'


class CreateQuizNav extends Component {



    render() {

        return (
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

        )
    }
}

export default CreateQuizNav;