// React Components
import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";


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

import IPhoneX from "./components/createQuizView/iPhoneX/IPhoneX.component";


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
            activeStep: 2,
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
                formCtrls: {
                    ...this.state.formCtrls,
                    activeStep: prevState.formCtrls.activeStep + 1
                }
            }));
        }


        // console.log(`
        //     ACTIVE STATE IS ${this.state.formCtrls.activeStep}
        // `);
    };

    handleOnClickActiveDownStep = () => {
        if (this.state.formCtrls.activeStep >= 2 && this.state.formCtrls.activeStep <= 3) {
            this.setState(prevState => ({
                formCtrls: {
                    ...this.state.formCtrls,
                    activeStep: prevState.formCtrls.activeStep - 1
                }
            }));
        }
        // this.setState(prevState => ({
        //     formCtrls: {...this.state.formCtrls, activeStep: prevState.formCtrls.activeStep - 1}
        // }));
    };

    handleStateChange = (event) => {

        // console.log(`
        //     EVENT ID IS ${event.target.id}
        //     EVENT CHECKED IS ${event.target.checked}
        // `);

        let payload = null;


        if (event.target.id) {
            event.target.name = event.target.id;
            // console.log(`CHANGE ${event.target.name}`);
        } else if (event.target.value) {
            payload = event.target.value;
        }

        switch (event.target.name) {
            case "title":
                this.setState({
                    form: {...this.state.form, title: payload}
                });
                break;

            case "img":
                this.setState({
                    form: {
                        ...this.state.form,
                        img: URL.createObjectURL(event.target.files[0])
                    }
                });
                break;

            case "collaborative":
                this.setState(prevState => ({
                    form: {...this.state.form, collaborative: !prevState.form.collaborative}
                }));
                break;

            case "personal":
                this.setState(prevState => ({
                    form: {...this.state.form, personal: !prevState.form.personal}
                }));
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
                return <FormStepOne form={this.state.form}
                                    handleState={this.handleStateChange}/>;
            case 2:
                return <FormStepTwo form={this.state.form}
                                    handleState={this.handleStateChange}/>;
            case 3:
                return <FormStepThree form={this.state.form}
                                      handleState={this.handleStateChange}/>;
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
                        <CreateQuizNav
                            activeStep={this.state.formCtrls.activeStep}/>
                    </div>

                    <div className="create-quiz_-_forms offset-1 col-5">

                        <h2>
                            {this.state.formCtrls.stepContent[
                            this.state.formCtrls.activeStep - 1
                                ]}
                        </h2>

                        {this.getStepForm(this.state.formCtrls.activeStep)}

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
                            {(this.state.formCtrls.activeStep === 2)
                                ? <IPhoneX/>
                                : <div className="create-quiz_-_view_--_card">
                                    <Card quiz={this.state.form}/>
                                 </div>
                            }
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateQuizPage;