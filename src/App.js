import React from "react";
import "./App.css";
import { Route } from "react-router-dom"; // BrowserRouter,
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";

const App = props => {
    
    return (        
        <div className="app_wrapper">
            <HeaderContainer />
            <NavbarContainer />
            <div className="allcontent">
                <Route
                    path="/dialogs"
                    render={() => (
                        <DialogsContainer />
                    )}
                />
                <Route
                    path="/profile/:userId?"
                    render={() => (
                        <ProfileContainer />
                    )}
                />
                <Route
                    path="/findusers"
                    render={() => (
                        <UsersContainer />
                    )}
                />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
};

export default App;
