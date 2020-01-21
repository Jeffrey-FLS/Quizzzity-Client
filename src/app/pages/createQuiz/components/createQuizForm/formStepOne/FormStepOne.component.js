// React Components
import React, {Component, Fragment} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';

// Assets
// import './CreateQuizNav.component.scss';


export class FormStepOne extends Component {

    render() {
        return (
            // <Fragment>

                <form action="" className="create-quiz_-_forms_--_step1">
                    {/*<input type="text" placeholder="Title"*/}
                    {/*       onChange={this.handleOnChangeTextInput}/>*/}
                    <input type="text" placeholder="Title" name="title"
                           onChange={this.props.handleState}/>

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
                            <input type="file" name="img"
                                   onChange={this.props.handleState}/>
                            <p>+ Add Quiz Image</p>
                        </div>
                    </div>
                </form>
            // </Fragment>
        )
    }
}

// export default FormStepOne;