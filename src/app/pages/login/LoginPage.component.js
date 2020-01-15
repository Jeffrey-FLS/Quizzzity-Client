// React Components
import React, {Component} from 'react';
import { connect } from 'react-redux';

// Assets
import './LoginPage.component.scss';
import {FaUserAlt} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';

// Components

// Redux Actions
import { addLike, removeLike, changeText } from "../../../redux/actions";

class   LoginPage extends Component {

    fetchUser = (username, password) => {
        // fetch('http://localhost:3000/api/v1/users')
    };


    render() {
        // this.props.dispatch(addLike());

        return (
            <div className="loginPage">
                <header className="login_-_header_--_loginPage"><h1>Quizzzity</h1></header>

                <div className="container">
                    <div className="row">

                    <div className="login col-12 col-sm-8 col-md-6 col-lg-5">
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
                                    <button onClick={this.props.addLike}><FaFacebookF/></button>
                                    <h1>{this.props.likes}</h1>
                                    <button onClick={this.props.removeLike}><FaGoogle/></button>
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

                    <input name="text" value={this.props.text} onChange={this.props.changeText}/>
                    <h1>{this.props.text}</h1>

                </div>
            </div>
        )
    }
}


// function msp(state){
//     return {
//         likes: state.tests.likes,
//         text: state.tests.text
//     }
// }

const mdp = {
    addLike,
    removeLike,
    changeText
};

// const connectedLoginPage = connect(msp, mdp)(LoginPage);
// export { connectedLoginPage as LoginPage };

export default connect(state => state.tests, mdp)(LoginPage);
// export default connect(state => state.testReducer)(LoginPage);

// export default LoginPage;