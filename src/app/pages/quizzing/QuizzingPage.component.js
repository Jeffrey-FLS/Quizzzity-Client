// React Components
import React, {Component} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';

// Assets
// import './CreateQuizNav.component.scss';
import Switch from '@material-ui/core/Switch';


class QuizzingPage extends Component {

    render() {

        return (
            <form action="" className="create-quiz_-_forms_--_step1">
                {/*<input type="text" placeholder="Write your question here"*/}
                {/*       onChange={this.handleOnChangeTextInput}/>*/}

                <div className="create-quiz_-_forms_--_select">
                    <select>
                        <option value="0">Select Difficulty</option>
                        <option value="1">Beginner</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Advanced</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_switch">
                    <div className="create-quiz_-_forms_--_switch-txt">
                        <h4>Do you want to make this quiz private?</h4>
                    </div>

                    <div className="create-quiz_-_forms_--_switch-btn">
                        <Switch
                            id="personal"
                            checked={this.props.form.personal}
                            onChange={this.props.handleState}
                            value="personal"
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                </div>

                <div className="create-quiz_-_forms_--_switch">
                    <div className="create-quiz_-_forms_--_switch-txt">
                        <h4>Would you like for this quiz to be open for collaboration
                            with other users?</h4>
                    </div>

                    <div className="create-quiz_-_forms_--_switch-btn">
                        <Switch
                            id="collaborative"
                            size="medium"
                            checked={this.props.form.collaborative}
                            onChange={this.props.handleState}
                            value="collaborative"
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default QuizzingPage;