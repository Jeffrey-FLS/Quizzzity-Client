// React Components
import React, {Component} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';

import { MdKeyboardArrowRight } from 'react-icons/md'


// Assets
import './CreateQuizPage.component.scss';
import Card from "../userHome/components/card/Card.component";
// import imgPlaceholder from '../../../assets/images/img-placeholder.png'
import imgPlaceholder from "assets/images/img-placeholder.png";


class CreateQuizPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        form: {
            id: 1,
            title: 'Untitled',
            img: imgPlaceholder,
            duration: 0,
            difficulty: 'beginner',
            num_of_questions: 0,
            quizzed: 0,
            collaborative: true,
            personal: false
        }
    };

    handleOnChangeTextInput = (event) => {
        this.setState({
            form:{...this.state.form, title: event.target.value}
        });

        // console.log(`
        //  handleOnChangeInput IS ${this.state.title}
        // `);
    };

    handleOnChangeFileInput = (event) => {

        console.log(`
            IMG URL IS ${URL.createObjectURL(event.target.files[0])}
        `);

      this.setState({
          form:{...this.state.form, img: URL.createObjectURL(event.target.files[0])}
      })
    };


    render() {

        // console.log(`
        //     THE images.placeholder VALUE IS ${images.placeholder}
        // `);

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
                            <input type="text" placeholder="Title"
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
                                <h5>Upload Image</h5>

                                <div className="create-quiz_-_forms_--_input-file-btn">
                                    <FaRegImages className="create-quiz_-_forms_--_input-file-btn_icon"/>
                                    <input type="file" name="myfile" onChange={this.handleOnChangeFileInput}/>
                                    <p>+ Add Quiz Image</p>
                                </div>
                            </div>

                        </form>

                        <div className="create-quiz_-_forms_--_save-next">
                            <button><FaRegSave className="create-quiz_-_forms_--_save-next-icon"/> Save</button>
                            <button>Next <MdKeyboardArrowRight className="create-quiz_-_forms_--_save-next-icon"/></button>
                        </div>

                    </div>

                    <div className="create-quiz_-_view col-4 offset-1">
                        <div className="create-quiz_-_view_--_card">
                            <Card quiz={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateQuizPage;