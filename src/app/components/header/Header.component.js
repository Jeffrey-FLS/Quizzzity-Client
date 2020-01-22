// React Components
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Assets
import './Header.component.scss';
import {HamburgerSlider} from 'react-animated-burgers'

import {
    FaSearch,
    FaPlusCircle,
    FaRegUserCircle,
    FaBell
} from 'react-icons/fa';


class Header extends Component {

    state = {
        isActive: false
    };

    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    };

    render() {
        return (
            <header className="header container-fluid">
                <div className="row">
                    <div className="header_-_logo col-1">
                        {/*<Link to="/"><h2>Qwix</h2></Link>*/}
                        <Link to="/"><h2>Quizzzity</h2></Link>
                    </div>
                    <div className="header_-_create-quiz offset-1 col-2">
                        <Link to="/create-quiz">
                            <h3>
                                <FaPlusCircle
                                    className="header_-_create-quiz-icon"/> Create
                                New Quiz
                            </h3>
                        </Link>
                    </div>

                    <div className="header_-_search-box offset-1 col-3">
                        <input type="text" placeholder="Search"/>
                        <button><FaSearch/></button>
                    </div>

                    <div className="header_-_nav-links offset-2 col-2">
                        <div className="header_-_nav-link_--_notifications">
                            <FaBell/>
                        </div>

                        <div className="header_-_nav-link_--_user">
                            <FaRegUserCircle/>
                        </div>

                        <div className="header_-_nav-links_--_menu">
                            <HamburgerSlider
                                className="header_-_nav-links_--_menu--hamburger"
                                isActive={this.state.isActive}
                                toggleButton={this.toggleButton}
                                barColor="#fff"
                                buttonWidth={30}
                            />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;