// React Components
import React from 'react';

// Assets
import './CreateUserForm.component.scss';

import {
    FaUserAlt,
    FaLock,
    FaFacebookF,
    FaGoogle
} from 'react-icons/fa';

const CreateUserForm = (props) => {
    return (
        <>
      <div className="login_-_title">
        <h1>Create User</h1>
      </div>

      <form action="" className="login_-_form">
        <label htmlFor="firstName">
          {/* <FaUserAlt /> */}
        </label>
        <input type="text" id="firstName" placeholder="First Name" />

        <label htmlFor="lastName">
          {/* <FaLock /> */}
        </label>
        <input type="text" id="lastName" placeholder="Last Name" />

        <label htmlFor="username">
          <FaUserAlt />
        </label>
        <input type="text" id="username" placeholder="Username" />

        <label htmlFor="password">
          {/* <FaLock /> */}
          <FaUserAlt />
        </label>
        <input type="password" id="password" placeholder="Password" />

        <div className="login_-_form_--_buttons">
          <input type="button" value="Return" onClick={props.handleReturnClick}/>
          <div className="login_-_form_--_buttons--social-links">
          <input type="submit" value="Submit" style={{float:"right"}}/>
          </div>
        </div>
      </form>
    </>
    );
};

export default CreateUserForm;
