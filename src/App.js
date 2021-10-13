import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

{/*There is 2 way to render components: attr RENDER & COMPONENTS*/}

let SomeComponent = (props) => <Profile />;     


function App(props) {
   
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs/>} />
                    <Route path='/profile' render = {() => <Profile postsData={props.postsData} />} />
                    <Route path='/news' render={() => <News/>} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
