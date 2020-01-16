import React, {Component} from 'react';

// Assets
import './Card.component.scss';
// import image from '../../../../../assets/images/react.jpeg';

import OneBar from '../../../../../assets/icons/Bar-level/one-bar.svg'
import TwoBar from '../../../../../assets/icons/Bar-level/two-bars.svg'
import ThreeBar from '../../../../../assets/icons/Bar-level/three-bars.svg'

// import {FiBarChart} from .FiBarChart
import { FiBarChart } from 'react-icons/fi';
import { FaRegClock } from 'react-icons/fa';

class Card extends Component {




    renderDifficulty = (intDifficulty) => {
        switch (intDifficulty) {
            case 'beginner':
                return <img src={OneBar}/>;
                break;
            case 'intermediate':
                return <img src={TwoBar}/>;
                break;
            case 'advanced':
                return <img src={ThreeBar}/>;
                break;
            default:
                break;
        }
    };


    render() {
        console.log(this.props.quiz);

        let {
            id,
            title,
            img,
            duration,
            difficulty,
            num_of_questions,
            quizzed,
            collaborative,
            personal
        } = this.props.quiz;

        return (
            <div className="card-uniq col-3">
                <div className="card_-_body">
                    <div className="card_-_img">
                        <img src={img} alt={title}/>
                    </div>

                    <div className="card_-_details">
                        <div className="card_-_details_--_title">
                            <h5>{title}</h5>
                        </div>

                        <div className="card_-_details_--_menu-btn">
                            <button>+</button>
                        </div>


                        <div className="card_-_details_--_questions">
                            <h6>{num_of_questions} Questions</h6>
                        </div>

                        {/*<div className="card_-_details_--_quizzed">*/}
                        {/*    <h6>{quizzed} Quizzed</h6>*/}
                        {/*</div>*/}

                        <div className="card_-_details_--_duration">
                            <h6><FaRegClock/> {duration} Min</h6>
                        </div>

                        <div className="card_-_details_--_difficulty">
                            {this.renderDifficulty(difficulty)} <h6>
                                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                            </h6>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Card;