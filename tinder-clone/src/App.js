// import logo from './logo.svg';
import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person" >
            <Header backButton="/chat" />
            <ChatScreen/>
          </Route>
          <Route path="/chat" >
            <Header backButton="/" />
            <Chats/>
          </Route>

          <Route path="/" >
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      
      </Router>

    </div>
  );
}

export default App;

{/* header */}
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}
      {/* chats screen */}
      {/* individual chat scren */}