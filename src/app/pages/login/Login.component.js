import React, {Component} from 'react';

import './Login.component.scss';

import {FaUserAlt} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';

class LoginPage extends Component {

    fetchUser = (username, password) => {
        // fetch('http://localhost:3000/api/v1/users')
    };

    render() {
        return (
            <div className="loginPage">
                <header className="login_-_header_--_loginPage"><h1>Quizzzity</h1></header>

                {/*<div className="container"></div>*/}
                <div className="login">
                    <div className="row">
                    <div className="login_-_body">
                        <div className="login_-_title">
                            <h1>Login</h1>
                        </div>

                        <form action="" className="login_-_form">
                            <label htmlFor="username"><FaUserAlt/></label>
                            <input type="text" id="username"
                                   placeholder="Username"/>

                            <label htmlFor="password"><FaLock/></label>
                            <input type="password" id="password"
                                   placeholder="Password"/>

                            <div className="login_-_form_--_remember-forgot">
                            <label className="checkbox-container" htmlFor="remember">Remember
                                <input type="checkbox" name="remember"/>
                                <span className="checkmark"/>
                            </label>

                                <a href="#">Forgot Password?</a>
                            </div>

                            <br/>

                            <div className="login_-_form_--_buttons">
                                <input type="submit" value="Sign-In"/>

                                <div className="login_-_form_--_buttons--social-links">
                                    <button><FaFacebookF/></button>
                                    <button><FaGoogle/></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>

                <div className="login_-_breakline">
                    <h3>OR</h3>
                </div>

                <div className="login_-_create-new">
                    <button>Create New Account</button>
                </div>


            </div>
        )
    }
}

export default LoginPage;