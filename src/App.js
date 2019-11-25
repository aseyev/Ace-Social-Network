import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom"; // BrowserRouter,
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = props => {
    return (
        <div className="app_wrapper">
            <Header />
            <Navbar friendsPage={props.state.friendsPage} />
            <div className="allcontent">
                <Route
                    path="/dialogs"
                    render={() => (
                        <Dialogs 
                            dialogsPage={props.state.dialogsPage} 
                            dispatch={props.dispatch}
                        />
                    )}
                />
                <Route
                    path="/profile"
                    render={() => (
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />
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
