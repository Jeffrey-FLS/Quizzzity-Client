// React Components
import React, {Component} from 'react';
import { connect } from 'react-redux';

import Child from "./components/Child.component";

// Assets
import './TestPage.component.scss';

// Redux Actions
import { addLike, removeLike, changeText, userActions } from "../../../redux/actions";

class TestPage extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchUsers();
    }


    render() {
        // this.this.props.dispatch(addLike());

        return (
            <div className="TestPage">
                <div className={"App" + (this.props.darkMode ? " dark" : "")}>
                    {/*<button onClick={this.props.toggleDarkMode}>Dark mode</button>*/}
                    <h3>{this.props.text}</h3>
                    <input
                        name="text"
                        value={this.props.text}
                        onChange={this.props.changeText}/>
                    {/*<button onClick={this.props.addThang}>Add thang!</button>*/}
                    <h4>{this.props.likes} likes</h4>
                    <button onClick={this.props.addLike}>
                        Like<span role="img" aria-label="thumbs up">👍</span>
                    </button>
                    <button onClick={this.props.removeLike}>
                        Dislike <span role="img" aria-label="thumbs down">👎</span>
                    </button>

                    {/*{renderThangs()}*/}
                    <Child />

                    {(this.props.users !== undefined)
                        ? this.props.users.map(user => <h4>{user.first_name}</h4>)
                        : ''}
                </div>
            </div>
        )
    }
}


function msp(state){
    return {
        likes: state.tests.likes,
        darkMode: state.tests.darkMode,
        thangs: state.tests.thangs,
        text: state.tests.text,
        users: state.users.users
    }
}

const mdp = {
    addLike,
    removeLike,
    changeText,
    fetchUsers: userActions.fetchUsers
};

// const connectedLoginPage = connect(msp, mdp)(LoginPage);
// export { connectedLoginPage as LoginPage };

export default connect(msp, mdp)(TestPage);
// export default connect(state => state.testReducer)(LoginPage);

// export default LoginPage;