// React Components
import React, { Component } from 'react';

// Assets
import './UserHomePage.component.scss';

// Components
import Card from "./components/card/Card.component";

// Data
// import data from "../../../data/temp_data";

import {quizActions} from "../../../redux/actions";
import {connect} from "react-redux";


class UserHomePage extends Component {

    componentDidMount() {
        this.props.fetchQuizzes();
    }

    render() {
        return (
            <div className="user-menu container">
                <div className="row">
                    <div className="user-menu_-_title col-4">
                        <h2>My Quizzes</h2>
                    </div>

                    <div className="user-menu_-_filter offset-5 col-3">
                        <h5>All</h5>
                        <h5>Unfinished</h5>
                        <h5>Completed</h5>
                    </div>
                </div>

                <div className="user-menu_-_card-container">
                    <div className="row">
                        {
                            this.props.quizzes.map((quiz, index) => {
                                return <Card key={index} quiz={quiz}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


const mdp = {
    fetchQuizzes: quizActions.fetchQuizzes
};

// export default UserHomePage;
export default connect(state => state.quizzes, mdp)(UserHomePage);