// React Components
import React, {Component} from 'react';

// Libs Components
import {FaSearch} from 'react-icons/fa';
import {FaRegUserCircle} from 'react-icons/fa';
import {FaBell} from 'react-icons/fa';
import {HamburgerSlider} from 'react-animated-burgers'

// Assets
import './Header.component.scss';


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
                        <h2>Qwix</h2>
                    </div>

                    <div className="header_-_search-box offset-4 col-3">
                        <input type="text" placeholder="Search"/>
                        <button><FaSearch/></button>
                    </div>

                    <div className="header_-_nav-links offset-2 col-2">
                        <div className="row">


                            <div className="header_-_nav-link_--_notifications col-4">
                                <FaBell />
                            </div>

                            <div className="header_-_nav-link_--_user col-4">
                                <FaRegUserCircle />
                            </div>

                            <div className="header_-_nav-links_--_menu col-4">
                                <HamburgerSlider className="header_-_nav-links_--_menu--hamburger" isActive={this.state.isActive}
                                                 toggleButton={this.toggleButton}
                                                 barColor="#212121"
                                                 buttonWidth={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;