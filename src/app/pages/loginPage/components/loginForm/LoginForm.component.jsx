// React Components
import React from "react";

// Assets
import "./LoginForm.component.scss";

import {
    FaUserAlt,
    FaLock,
    FaFacebookF,
    FaGoogle
} from 'react-icons/fa';

// import {FaLock} from 'react-icons/fa';
// import {FaFacebookF} from 'react-icons/fa';
// import {FaGoogle} from 'react-icons/fa';

const LoginForm = () => {
  return (
    <>
      <div className="login_-_title">
        <h1>Login</h1>
      </div>

      <form action="" className="login_-_form">
        <label htmlFor="username">
          <FaUserAlt />
        </label>
        <input type="text" id="username" placeholder="Username" />

        <label htmlFor="password">
          <FaLock />
        </label>
        <input type="password" id="password" placeholder="Password" />

        <div className="login_-_form_--_remember-forgot">
          <label className="checkbox-container" htmlFor="remember">
            Remember
            <input type="checkbox" name="remember" />
            <span className="checkmark" />
          </label>

          <a href="#">Forgot Password?</a>
        </div>

        <br />

        <div className="login_-_form_--_buttons">
          <input type="submit" value="Sign-In" />

          <div className="login_-_form_--_buttons--social-links">
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaGoogle />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
