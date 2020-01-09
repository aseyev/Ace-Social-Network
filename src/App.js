import React from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom"; // BrowserRouter,
import MainPage from './components/Mainpage/Main';
import BlogContainer from './components/Devblog/BlogContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login';
import Projects from './components/Projects/Projects';
// import { getAuthUserData } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import PreloaderBlue from "./components/common/preloader/PreloaderBlue";



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    } 
    render () {
        if ( !this.props.initialized ) {
            return <PreloaderBlue />
        }

        return ( 
        <div className="app_wrapper">
            <div className="app_container">
                <HeaderContainer />
                <NavbarContainer />
                <div className="allcontent">
                    <Route
                        exact path="/"
                        render={() => (<MainPage />)}/>
                    <Route
                        path="/devblog"
                        render={() => (<BlogContainer />)}/>
                    <Route
                        path="/findusers"
                        render={() => (<UsersContainer />)}/>
                    <Route
                        path="/dialogs"
                        render={() => (<DialogsContainer />)}/>
                    <Route
                        path="/login"
                        render={() => (<LoginPage />)}/>
                    <Route
                        path="/projects"
                        render={() => (<Projects />)}/>
                    <Route
                        path="/profile/:userId?"
                        render={() => (<ProfileContainer />)}/>
                </div>
            </div>
        </div>
        );
    };
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
