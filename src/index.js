
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import { HashRouter } from "react-router-dom"; 
import { Provider } from "react-redux";

ReactDOM.render(
    <HashRouter>
        <Provider store={store} >
            <App />
        </Provider>
        
    </HashRouter>, document.getElementById('root')
);


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
