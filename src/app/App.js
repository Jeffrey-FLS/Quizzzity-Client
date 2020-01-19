// React Components
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// Assets
import './App.scss';

// App Components
// import UserMenuPage from "./pages/userMenu/UserMenuPage.component";
import Header from "./components/header/Header.component";
import LoginPage from "./pages/login/LoginPage.component";
import UserHomePage from "./pages/userHome/UserHomePage.component";
import TestPage from "./pages/test/TestPage.component";
import CreateQuizPage from "./pages/createQuiz/CreateQuizPage.component";
// import store from "../redux/store";

class App extends Component {

  state = {
    boolShowLoginPage: true,
    arrQuizzes: []
  };

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/quizzes')
  //       .then(response => response.json())
  //       .then(data => {
  //         // debugger
  //         this.setState({
  //           quizzes: data
  //         });
  //       }).catch(console.error);
  // }


  render() {
      // console.log(this.props.store);

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
