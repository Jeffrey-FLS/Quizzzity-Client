// React Components
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// Assets
import './App.scss';

// App Components
// import UserMenuPage from "./pages/userMenu/UserMenuPage.component";
import Header from "./components/header/Header.component";
import LoginPage from "./pages/login/Login.component";

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
    return (
        <div className="App">
          {(this.state.boolShowLoginPage) && <Header/>}

          <Switch>
            {/*<Route path="/userMain" render={(routerProps) => <UserMenuPage quizzes={this.state.quizzes} {...routerProps}/>}/>*/}
            <Route path="/" component={LoginPage}/>
          </Switch>
        </div>
    );
  }
}

export default App;
