// React Components
import React, {Component} from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";


// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';

import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft
} from 'react-icons/md'


// Assets
import './CreateQuizPage.component.scss';


import Card from "../../shared/card/Card.component";
import CreateQuizNav from "./components/createQuizNav/CreateQuizNav.component";
// import imgPlaceholder from '../../../assets/images/img-placeholder.png'

import imgPlaceholder from 'assets/images/img-placeholder.png';

import {
    FormStepOne,
    FormStepTwo,
    FormStepThree
} from "./components/createQuizForm";


class CreateQuizPage extends Component {
    // constructor(props) {
    //     super(props);
    // }

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
        },
        formCtrls: {
            activeStep: 1,
            stepContent: ["Create Quiz", "Create Questions", "Select Options"]
        },
        questions: []
    };

    // handleOnChangeTextInput = (event) => {
    //     this.setState({
    //         form:{...this.state.form, title: event.target.value}
    //     });
    // };

    // handleOnChangeFileInput = (event) => {
    //     console.log(`
    //         IMG URL IS ${URL.createObjectURL(event.target.files[0])}
    //     `);
    //
    //   this.setState({
    //       form:{...this.state.form, img: URL.createObjectURL(event.target.files[0])}
    //   })
    // };

    handleOnClickActiveUpStep = () => {

        if (this.state.formCtrls.activeStep >= 1 && this.state.formCtrls.activeStep <= 2) {
            this.setState(prevState => ({
                formCtrls: {...this.state.formCtrls, activeStep: prevState.formCtrls.activeStep + 1}
            }));
        }


        console.log(`
            ACTIVE STATE IS ${this.state.formCtrls.activeStep}
        `);
    };

    handleOnClickActiveDownStep = () => {
        if (this.state.formCtrls.activeStep >= 2 && this.state.formCtrls.activeStep <= 3) {
            this.setState(prevState => ({
                formCtrls: {...this.state.formCtrls, activeStep: prevState.formCtrls.activeStep - 1}
            }));
        }
        // this.setState(prevState => ({
        //     formCtrls: {...this.state.formCtrls, activeStep: prevState.formCtrls.activeStep - 1}
        // }));
    };

    handleStateChange = (event) => {

        // console.log(`
        //     EVENT NAME IS ${event.target.name}
        //     EVENT VALUE IS ${event.target.files[0]}
        // `);

        let payload = event.target.value;

        switch (event.target.name) {
                    case "title":
                        this.setState({
                            form:{...this.state.form, title: payload }
                        });

                        break;

                    case "img":
                        this.setState({
                            form:{...this.state.form, img: URL.createObjectURL(event.target.files[0])}
                        });

                        break;
                    default:
                        return "Incorrect State"

                        // img: imgPlaceholder,
                        // duration: 0,
                        // difficulty: 'beginner',
                        // num_of_questions: 0,
                        // quizzed: 0,
                        // collaborative: true,
                        // personal: false
                }
            };

    getStepForm = (step) => {
      switch (step) {
          case 1:
              return <FormStepOne form={this.state.form} handleState={this.handleStateChange}/>;
          case 2:
              return <FormStepTwo/>;
          case 3:
              // return <FormStepThree/>;
          default:
              return "Unknown Step"
      }
    };


        render() {

        // console.log(`
        //     THE images.placeholder VALUE IS ${images.placeholder}
        // `);

        return (
            <div className="create-quiz container">
                <div className="row">
                    <div className="col-1">
                        <CreateQuizNav activeStep={this.state.formCtrls.activeStep}/>
                    </div>

                    <div className="create-quiz_-_forms offset-1 col-5">

                        <h2>
                            {this.state.formCtrls.stepContent[
                                this.state.formCtrls.activeStep - 1
                                ]}
                        </h2>


                        {/*<TransitionGroup className="card-container">*/}
                        {/*    <CSSTransition*/}
                        {/*        key={this.state.formCtrls.activeStep}*/}
                        {/*        timeout={500}*/}
                        {/*        height={ 'auto' }*/}
                        {/*        classNames="fade"*/}
                        {/*    >*/}
                        {/*        {this.getStepForm(this.state.formCtrls.activeStep)}*/}

                        {/*    </CSSTransition>*/}
                        {/*</TransitionGroup>*/}


                        <div className="create-quiz_-_forms_--_save-next">
                            {/*<button><FaRegSave className="create-quiz_-_forms_--_save-next-icon"/> Save</button>*/}

                            <button onClick={this.handleOnClickActiveDownStep}>
                                <MdKeyboardArrowLeft
                                    className="create-quiz_-_forms_--_save-next-icon"
                                /> Back
                            </button>

                            <button onClick={this.handleOnClickActiveUpStep}>
                                Next
                                <MdKeyboardArrowRight
                                    className="create-quiz_-_forms_--_save-next-icon"/>
                            </button>
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