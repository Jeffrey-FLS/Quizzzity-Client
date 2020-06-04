// React Components
import React, {Component, Fragment} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Assets
// import './CreateQuizNav.component.scss';
import Switch from '@material-ui/core/Switch';


export class FormStepOne extends Component {

    render() {

        const inputFile =
            <div className="create-quiz_-_forms_--_input-file-btn">
                <FaRegImages
                    className="create-quiz_-_forms_--_input-file-btn_icon"/>
                <input type="file" name="img"
                       onChange={this.props.handleState}/>
                <p>+ Add Quiz Image</p>
            </div>;

        return (
            <form action="" className="create-quiz_-_forms_--_step1">
                {/*<input type="text" placeholder="Title"*/}
                {/*       onChange={this.handleOnChangeTextInput}/>*/}
                <input type="text" placeholder="Title" name="title"
                       onChange={this.props.handleState}/>

                <div className="create-quiz_-_forms_--_select">
                    <select>
                        <option value="0">Select Category</option>
                        <option value="1">Art</option>
                        <option value="2">Business</option>
                        <option value="3">Programming</option>
                        <option value="4">Physics</option>
                        <option value="5">Gaming</option>
                    </select>
                </div>

                <div className="create-quiz_-_forms_--_input-file">
                    <h6>Upload Image</h6>

                    <div
                        className="create-quiz_-_forms_--_input-file-url-local">
                        URL
                        <Switch
                            id="urlLocal"
                            checked={this.props.formCtrls.urlLocal}
                            onChange={this.props.handleState}
                            value="checkedB"
                            color="primary"
                        />LOCAL PATH
                    </div>

                    {(this.props.formCtrls.urlLocal)
                        ? inputFile
                        : <input type="text" placeholder="Title" name="img"
                                 onChange={this.props.handleState}/>
                    }
                </div>
            </form>
        )
    }
}

