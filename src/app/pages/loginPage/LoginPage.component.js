// React Components
import React, { useState } from "react";
// import { connect } from 'react-redux';

// Assets
import "./LoginPage.component.scss";
// import {FaUserAlt} from 'react-icons/fa';
// import {FaLock} from 'react-icons/fa';
// import {FaFacebookF} from 'react-icons/fa';
// import {FaGoogle} from 'react-icons/fa';

// Components
import LoginForm from "./components/loginForm/LoginForm.component";
import CreateUserForm from "./components/createUserForm/CreateUserForm.component";

// Redux Actions
// import { addLike, removeLike, changeText } from "../../../redux/actions";

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleClickCreateNewAccount = () => {
    setShowLoginForm(false);
  }

  const childHandleReturnClick = () => {
    setShowLoginForm(true);
  }

  return (
    <div className="loginPage">
      <header className="login_-_header_--_loginPage">
        <h1>Quizzzity</h1>
      </header>

      <div className="container">
        <div className="row">
          <div className="login col-12 col-sm-8 col-md-6 col-lg-5">
            <div className="login_-_body">
              {showLoginForm 
              ? <LoginForm /> 
              : <CreateUserForm handleReturnClick={childHandleReturnClick}/>}
            </div>
          </div>
        </div>

        {showLoginForm && <>
            <div className="login_-_breakline">
            <h3>OR</h3>
            </div>

            <div className="login_-_create-new">
            <button onClick={handleClickCreateNewAccount}>Create New Account</button>
            </div>
        </>}

      </div>
    </div>
  );
};

// function msp(state){
//     return {
//         likes: state.tests.likes,
//         text: state.tests.text
//     }
// }

// const mdp = {
//     addLike,
//     removeLike,
//     changeText
// };

// const connectedLoginPage = connect(msp, mdp)(LoginPage);
// export { connectedLoginPage as LoginPage };

// export default connect(state => state.tests, mdp)(LoginPage);
// export default connect(state => state.testReducer)(LoginPage);

export default LoginPage;
