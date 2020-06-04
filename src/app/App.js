// React Components
import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

// Assets
import './App.scss';

// App Components
import Header from "./components/header/Header.component";
import LoginPage from "./pages/loginPage/LoginPage.component";
import UserHomePage from "./pages/userHomePage/UserHomePage.component";
import TestPage from "./pages/test/TestPage.component";
import CreateQuizPage from "./pages/createQuizPage/CreateQuizPage.component";
// import CreateUserPage from "./pages/createUserPage/createUserPage.component";
import QuizzingPage from "app/pages/quizzingPage/QuizzingPage.component";

import { history } from "redux/helpers";


class App extends Component {

    constructor(props) {
        super(props);
    }

    // state = {
    //     quizzingPg: false,
    // };
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.location.pathname !== this.props.location.pathname) {
    //
    //     }
    // }
    //
    // currentLocation = (location) => {
    //     switch (location) {
    //         case '/quizzing':
    //
    //
    //     }
    // };


    render() {
        // console.log(`
        //     LOCATION PATHNAME IS ${this.props.location.pathname}
        // `);

        return (
            <div className="App">
                {(history.location.pathname !== "/login") && <Header quizzing={(history.location.pathname === '/quizzing')}/>}

                <Switch>
                    {/*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*/}
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/create-quiz" component={CreateQuizPage}/>
                    <Route path="/test" component={TestPage}/>
                    <Route path="/home" component={UserHomePage}/>
                    <Route path="/quizzing" component={QuizzingPage}/>
                    {/* <Route exact path="/" render={() => (<Redirect to="/quizzing"/>)}/> */}
                    <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
                </Switch>
            </div>
        );
    }
}

export default App;
