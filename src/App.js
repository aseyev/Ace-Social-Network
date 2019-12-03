import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom"; // BrowserRouter,
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = props => {
    
    return (        
        <div className="app_wrapper">
            <Header />
            <NavbarContainer />
            <div className="allcontent">
                <Route
                    path="/dialogs"
                    render={() => (
                        <DialogsContainer />
                    )}
                />
                <Route
                    path="/profile"
                    render={() => (
                        <Profile />
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