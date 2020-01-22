// React Components
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WebFont from 'webfontloader';
import store from './redux/store';
import {Provider} from 'react-redux';


// Assets
// import './libs/bootstrap-4.4.1-dist/css/bootstrap.min.css';
import './libs/bootstrap-4.4.1/scss/bootstrap.scss';
// import './libs/materialize-src/sass/materialize.scss'
import './styles/index.scss';

// Components
import App from './app/App';

WebFont.load({
    google: {
        families: [
            // 'Ubuntu:300,400,700',
            'Ubuntu',
            'Rubik',
            'sans-serif'
        ]
    }
});

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
