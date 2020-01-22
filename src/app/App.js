// React Components
import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

// Assets
import './App.scss';

// App Components
import Header from "./components/header/Header.component";
import LoginPage from "./pages/login/LoginPage.component";
import UserHomePage from "./pages/userHome/UserHomePage.component";
import TestPage from "./pages/test/TestPage.component";
import CreateQuizPage from "./pages/createQuiz/CreateQuizPage.component";

class App extends Component {

    state = {
        boolShowLoginPage: true,
    };

    render() {
        return (
            <div className="App">
                {(this.state.boolShowLoginPage) && <Header/>}

                <Switch>
                    {/*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*/}
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/create-quiz" component={CreateQuizPage}/>
                    <Route path="/test" component={TestPage}/>
                    <Route path="/" component={UserHomePage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
