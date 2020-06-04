// React Components
import React, {Component} from 'react';

// Libs Components
import {
    FaRegImages,
    FaRegSave
} from 'react-icons/fa';

// Assets
import './IPhoneX.component.scss';
import iPhoneX from 'assets/images/iphonex.png';


class IPhoneX extends Component {

    render() {
        return (
            <div className="iphone-x">
                <div className="iphone-x_-_content">
                    <div className="iphone-x_-_content_--_body">
                        <div className="iphone-x_-_content_--_top-header">
                            <p>9:56</p>

                        </div>
                    </div>
                    <div className="iphone-x_-_content_--_card-question">
                        <p>Hello World</p>
                    </div>
                </div>
                <img src={iPhoneX} alt=""/>
            </div>
        )
    }
}

export default IPhoneX;