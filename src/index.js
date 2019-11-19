
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import state, {subscribe} from './redux/state'
import { HashRouter } from "react-router-dom"; 
import {addPost, updateNewPostText} from './redux/state'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <HashRouter>
        <App state={state} addPost={addPost} updateNewPostText ={updateNewPostText}/>
    </HashRouter>, document.getElementById('root')
);
}

rerenderEntireTree (state);

subscribe (rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
