import React from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom"; // BrowserRouter,
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login';
// import { getAuthUserData } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import PreloaderBlue from "./components/common/preloader/PreloaderBlue";
import MainPage from './components/Mainpage/Main';



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
            <HeaderContainer />
            <NavbarContainer />
            <div className="allcontent">
            <Route
                    exact path="/"
                    render={() => (<MainPage />)}/>
                <Route
                    path="/dialogs"
                    render={() => (<DialogsContainer />)}/>
                <Route
                    path="/profile/:userId?"
                    render={() => (<ProfileContainer />)}/>
                <Route
                    path="/findusers"
                    render={() => (<UsersContainer />)}/>
                <Route
                    path="/login"
                    render={() => (<LoginPage />)}/>
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
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
