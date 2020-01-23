// React Components
import React, {Component, Fragment} from 'react';
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
import imgPlaceholder from 'assets/images/img-placeholder.png';

import {
    FormStepOne,
    FormStepTwo,
    FormStepThree,
    FormCreateQuestion
} from "./components/createQuizForm";

import IPhoneX from "./components/createQuizView/iPhoneX/IPhoneX.component";

// import {FormCreateQuestion} from "app/pages/createQuiz/components/createQuizForm/formCreateQuestion/FormCreateQuestion.component";


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
        },
        formCtrls: {
            activeStep: 1,
            stepContent: ["Create Quiz", "Create Questions", "Select Options"],
            urlLocal: true,
            createQuestion: false,
            questionValid: false
        },
        questionForm: {
            question: "",
            questionType: "",
            singleMultiple: "",
            correctAnswer: "",
            answerOne: "",
            answerTwo: "",
            answerThree: ""
        },
        questions: []
    };


    componentDidUpdate(prevProps, prevState) {
        if (prevState.questions !== this.state.questions) {
            this.setNumOfQuestionsDuration();
            // console.log('pokemons state has changed.')
        }
    }

    // componentDidUpdate() {
    //     this.calculatedDuration();
    // }

    setAddQuestion = (bool) => {
        // if (bool !== this.state.formCtrls.createQuestion) {
            this.setState({
                formCtrls: {
                    ...this.state.formCtrls,
                    createQuestion: bool
                }
            });
        // }
    };


    // FIXME: bad implementation
    resetQuestionState = () => {
        this.setState({
            questionForm: {
                question: "",
                questionType: "",
                singleMultiple: "",
                correctAnswer: "",
                answerOne: "",
                answerTwo: "",
                answerThree: ""
            }
        })
    };

    handleOnClickActiveUpStep = () => {

        // if (this.state.formCtrls.activeStep === 1) {
        //     this.setState({
        //         formCtrls: {
        //             ...this.state.formCtrls,
        //             createQuestion: true
        //         }
        //     });
        // }

        console.log(`ADDQUESTION IS ${this.state.formCtrls.createQuestion}`);


        if (this.state.formCtrls.activeStep >= 1 && this.state.formCtrls.activeStep <= 2) {
            this.setState(prevState => ({
                formCtrls: {
                    ...this.state.formCtrls,
                    activeStep: prevState.formCtrls.activeStep + 1,
                    createQuestion: true
                }
            }));
        }

        console.log(`ADDQUESTION IS ${this.state.formCtrls.createQuestion}`);


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
    };

    handleStateChange = (event) => {

        console.log(`
            EVENT ID IS ${event.target.id}
            EVENT VALUE IS ${event.target.value}
            EVENT CHECKED IS ${event.target.checked}
        `);

        let payload = null;


        if (event.target.id) {
            event.target.name = event.target.id;
            // console.log(`CHANGE ${event.target.name}`);
        } else if (event.target.value) {
            payload = event.target.value;
        }

        // IMG Url Or Local
        if (event.target.name === "img") {
            payload = (this.state.formCtrls.urlLocal)
                ? URL.createObjectURL(event.target.files[0])
                : event.target.value;
        }


        console.log(`
            PAYLOAD IS ${payload}
        `);

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
                        img: (payload !== 0) ? payload : imgPlaceholder
                        // img: URL.createObjectURL(event.target.files[0])
                    }
                });
                break;

            case "difficulty":
                this.setState({
                    form: {...this.state.form, difficulty: payload}
                });
                break;

            case "collaborative":
                this.setState(prevState => ({
                    form: {
                        ...this.state.form,
                        collaborative: !prevState.form.collaborative
                    }
                }));
                break;

            case "personal":
                this.setState(prevState => ({
                    form: {
                        ...this.state.form,
                        personal: !prevState.form.personal
                    }
                }));
                break;

            case "urlLocal":
                this.setState(prevState => ({
                    formCtrls: {
                        ...this.state.formCtrls,
                        urlLocal: !prevState.formCtrls.urlLocal
                    }
                }));
                break;

            // Question Forms --------------------------------------------------

            case "question":
                this.setState({
                    questionForm: {...this.state.questionForm, question: payload}
                });

                    if (this.state.questionForm.question !== undefined) {
                        this.handleQuestionValidation(true);
                    }
                break;

            case "questionType":
                this.setState({
                    questionForm: {...this.state.questionForm, questionType: payload}
                });
                break;

            case "singleMultiple":
                this.setState({
                    questionForm: {...this.state.questionForm, singleMultiple: payload}
                });
                break;

            case "correctAnswer":
                this.setState({
                    questionForm: {...this.state.questionForm, correctAnswer: payload}
                });
                break;

            case "answerOne":
                this.setState({
                    questionForm: {...this.state.questionForm, answerOne: payload}
                });
                break;

            case "answerTwo":
                this.setState({
                    questionForm: {...this.state.questionForm, answerTwo: payload}
                });
                break;

            case "answerThree":
                this.setState({
                    questionForm: {...this.state.questionForm, answerThree: payload}
                });
                break;

            default:
                return "Incorrect State"

                // questionForm: {
                //     question: "",
            //         questionType: "",
            //         singleMultiple: "",
            //         correctAnswer: "",
            //         answerOne: "",
            //         answerTwo: "",
            //         answerThree: ""
                // },

            // img: imgPlaceholder,
            // duration: 0,
            // difficulty: 'beginner',
            // num_of_questions: 0,
            // quizzed: 0,
            // collaborative: true,
            // personal: false
        }
    };

    handleQuestionValidation = (bool) => {
        this.setState({
            formCtrls: {
                ...this.state.formCtrls,
                questionValid: bool
            }
        })
    };

    getStepForm = (step) => {
        switch (step) {
            case 1:
                return <FormStepOne form={this.state.form}
                                    formCtrls={this.state.formCtrls}
                                    handleState={this.handleStateChange}/>;
            case 2:
                return <Fragment>
                    {(this.state.formCtrls.createQuestion)
                        ? <FormCreateQuestion formCtrls={this.state.formCtrls}
                                              questions={this.state.questions}
                                              setAddQuestion={this.setAddQuestion}/>
                        : <FormStepTwo form={this.state.form}
                                       formCtrls={this.state.formCtrls}
                                       handleState={this.handleStateChange}/>}
                </Fragment>;
            case 3:
                return <FormStepThree form={this.state.form}
                                      formCtrls={this.state.formCtrls}
                                      handleState={this.handleStateChange}/>;
            default:
                return "Unknown Step"
        }
    };

    handleOnClickAddQuestion = () => {
        let question = {...this.state.questionForm};

        console.log(`
            QUESTION IS ${JSON.stringify(question)}
            `);

        this.setState(prevState => ({
            questions: [...this.state.questions, question]
            // formCtrls: {...this.state.formCtrls, createQuestion: true}
        }));

        console.log(`
            QUESTION IS ${JSON.stringify(question)}
            STATE IS ${JSON.stringify(this.state.questions)}
            CREATEQUESTION VALUE IS ${this.state.formCtrls.createQuestion}
        `);


        this.setAddQuestion(true);

        // console.log(`
        //     CREATEQUESTION VALUE IS ${this.state.formCtrls.createQuestion}
        // `);

        this.resetQuestionState();
        this.handleQuestionValidation(false);
    };


    // componentDidUpdate(): void {
    //     if (this.state.questionForm.question !== undefined) {
    //         this.handleQuestionValidation(true);
    //     }
    // }


    setNumOfQuestionsDuration = () => {
        if (this.state.questions.length !== 0) {
            let durationVal = this.state.questions.length * 3;

            console.log(`DURATIONVAL IS ${durationVal}`);

            this.setState({
                form:{
                    ...this.state.form,
                    num_of_questions: this.state.questions.length,
                    duration: durationVal
                }
            })
        }
    };

    // calculatedDuration = () => {
    //
    //     // console.log(`
    //     //     THE AMOUNT OF QUESTIONS ARE ${this.state.questions.length}
    //     //     AND DURATION IS ${this.state.questions.length * 3}
    //     // `);
    //
    //     if (this.state.questions.length !== 0) {
    //         let durationVal = this.state.questions.length * 3;
    //
    //         console.log(`DURATIONVAL IS ${durationVal}`);
    //
    //         this.setState({
    //             form:{
    //                 ...this.state.form,
    //                 duration: durationVal
    //             }
    //         })
    //     }

    //     console.log(`
    //         THE AMOUNT OF QUESTIONS ARE ${this.state.questions.length}
    //         AND DURATION IS ${this.state.form.duration}
    //     `);
    // };

    render() {

        // console.log(`
        //     THE images.placeholder VALUE IS ${images.placeholder}
        // `);

        // if (this.state.questionForm.question !== undefined) {
        //     this.handleQuestionValidation(true);
        // }

        const backBtn =
            <button onClick={() => {this.handleOnClickActiveDownStep()}}>
                <MdKeyboardArrowLeft
                    className="create-quiz_-_forms_--_save-next-icon"
                /> Back
            </button>;

        const nextBtn =
            <button onClick={() => {this.handleOnClickActiveUpStep()}}>
                {(this.state.formCtrls.activeStep === 3)
                    ? <>Finish<FaRegSave className="create-quiz_-_forms_--_submit-icon"/></>
                    : <>Next<MdKeyboardArrowRight className="create-quiz_-_forms_--_save-next-icon"/></>}
                {/*<MdKeyboardArrowRight*/}
                {/*    className="create-quiz_-_forms_--_save-next-icon"/>*/}
            </button>;

        const submitQuestionBtn =
            <button onClick={() => {this.handleOnClickAddQuestion();this.setAddQuestion(true);}}
                style={{backgroundColor:(!this.state.formCtrls.questionValid) && "gray"}}
                disabled={!this.state.formCtrls.questionValid}
            >Submit
                <FaRegSave className="create-quiz_-_forms_--_submit-icon"/>
            </button>;
    

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

                            {(this.state.formCtrls.activeStep !== 1) && backBtn}

                            {(this.state.formCtrls.activeStep === 2 && !this.state.formCtrls.createQuestion)
                                ? submitQuestionBtn
                                : nextBtn}

                            {/*<button onClick={this.handleOnClickActiveUpStep}>*/}
                            {/*    {(this.state.formCtrls.activeStep === 3) ? "Finish" : "Next"}*/}
                            {/*    <MdKeyboardArrowRight*/}
                            {/*        className="create-quiz_-_forms_--_save-next-icon"/>*/}
                            {/*</button>*/}
                        </div>
                    </div>

                    <div className="create-quiz_-_view col-4 offset-1">
                        {(this.state.formCtrls.activeStep === 2 && !this.state.formCtrls.createQuestion)
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