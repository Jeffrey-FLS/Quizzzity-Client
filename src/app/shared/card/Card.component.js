import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Assets
import './Card.component.scss';
// import image from '../../../../../assets/images/react.jpeg';

import OneBar from '../../../assets/icons/Bar-level/one-bar.svg'
import TwoBar from '../../../assets/icons/Bar-level/two-bars.svg'
import ThreeBar from '../../../assets/icons/Bar-level/three-bars.svg'
import imgPlaceholder from '../../../assets/images/img-placeholder.png'

import {FaRegClock} from 'react-icons/fa';

class Card extends Component {

    constructor(props) {
        super(props);
        // this.state({
        //     quiz: {
        //         id: 1,
        //         title: 'Untitled',
        //         img: imgPlaceholder,
        //         duration: 0,
        //         difficulty: 'beginner',
        //         num_of_questions: 0,
        //         quizzed: 0,
        //         collaborative: true,
        //         personal: false
        //     }
        // })
    }

    static propTypes = {
        quiz: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            img: PropTypes.string,
            duration: PropTypes.number,
            difficulty: PropTypes.bool,
            num_of_questions: PropTypes.number,
            quizzed: PropTypes.number,
            collaborative: PropTypes.bool,
            personal: PropTypes.bool
        }).isRequired
    };

    static defaultProps = {
        quiz: {
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

    componentDidUpdate(prevProps){
        if(prevProps.quiz !== this.props.quiz){
            this.setState({
                quiz: this.props.quiz
            });
        }
    }

    isImgEmpty = (strImg) => {
        return (strImg === undefined || strImg.length === 0)
            ? imgPlaceholder
            : strImg
    };

    renderDifficulty = (intDifficulty) => {
        switch (intDifficulty) {
            case 'beginner':
                return <img src={OneBar} alt="OneBar"/>;
                // break;
            case 'intermediate':
                return <img src={TwoBar} alt="TwoBar"/>;
                // break;
            case 'advanced':
                return <img src={ThreeBar} alt="ThreeBar"/>;
                // break;
            default:
                return <img src={OneBar} alt="OneBar"/>;
                // break;
        }
    };


    render() {
        // console.log(this.props.quiz);

        let quiz = this.props.quiz;



        return (
            <div className="card-uniq col-3">
                <div className="card_-_body">
                    <div className="card_-_img">
                        {/*<img src={(quiz.img !== "") ?quiz.img :imgPlaceholder} alt={quiz.title}/>*/}
                        <img src={this.isImgEmpty(quiz.img)} alt={quiz.title}/>
                    </div>

                    <div className="card_-_details">
                        <div className="card_-_details_--_title">
                            <h5>{quiz.title}</h5>
                        </div>

                        <div className="card_-_details_--_menu-btn">
                            <button>+</button>
                        </div>


                        <div className="card_-_details_--_questions">
                            <h6>{quiz.num_of_questions} Questions</h6>
                        </div>

                        {/*<div className="card_-_details_--_quizzed">*/}
                        {/*    <h6>{quizzed} Quizzed</h6>*/}
                        {/*</div>*/}

                        <div className="card_-_details_--_duration">
                            <h6><FaRegClock/> {quiz.duration} Min</h6>
                        </div>

                        <div className="card_-_details_--_difficulty">
                            {this.renderDifficulty(quiz.difficulty)} <h6>
                            {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                        </h6>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

// Card.defaultProps = {
//     id: 1,
//     title: 'Untitled',
//     img: imgPlaceholder,
//     duration: 0,
//     difficulty: 'beginner',
//     num_of_questions: 0,
//     quizzed: 0,
//     collaborative: true,
//     personal: false
// };

export default Card;

