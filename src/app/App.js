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
// import store from "../redux/store";

class App extends Component {

  state = {
    boolShowLoginPage: false,
    arrQuizzes: []
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/quizzes')
        .then(response => response.json())
        .then(data => {
          // debugger
          this.setState({
            quizzes: data
          });
        }).catch(console.error);
  }


  render() {
      // console.log(this.props.store);

      return (
        <div className="App">
          {(this.state.boolShowLoginPage) && <Header/>}

          <Switch>
            {/*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*/}
            <Route path="/userHome" component={UserHomePage}/>
            <Route path="/LoginPage" component={LoginPage}/>
            <Route path="/" component={TestPage}/>
          </Switch>
        </div>
    );
  }
}

export default App;
