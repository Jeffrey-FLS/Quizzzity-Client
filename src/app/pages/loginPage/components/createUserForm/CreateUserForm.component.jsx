// React Components
import React, { Component, Fragment } from "react";

// Assets
import "./CreateUserForm.component.scss";

import {
  FaUserAlt,
  // FaLock,
  // FaFacebookF,
  // FaGoogle
} from "react-icons/fa";

import { userActions } from "redux/actions";
import { connect } from "react-redux";

// Pushing to Git

class CreateUserForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(this.state));

    this.props.createUser(this.state);
    // if (this.state.password === this.state.passwordConfirmation) {
    //   // some stuff
    // } else {
    //   alert("You messed up. Try again. Get better at typing.");
    // }
  };

  render() {
    return (
      <Fragment>
        <div className="login_-_title">
          <h1>Create User</h1>
        </div>

        <form action="" className="login_-_form" onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">{/* <FaUserAlt /> */}</label>
          <input
            name="first_name"
            type="text"
            id="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">{/* <FaLock /> */}</label>
          <input
            name="last_name"
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <label htmlFor="email">{/* <FaLock /> */}</label>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="username">
            <FaUserAlt />
          </label>
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <label htmlFor="password">
            {/* <FaLock /> */}
            <FaUserAlt />
          </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div className="login_-_form_--_buttons">
            <input
              type="button"
              value="Return"
              onClick={this.props.handleReturnClick}
            />
            <div className="login_-_form_--_buttons--social-links">
              <input type="submit" value="Submit" style={{ float: "right" }} />
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mdp = {
  createUser: userActions.createUser,
};

export default connect(null, mdp)(CreateUserForm);

// export default CreateUserForm;
