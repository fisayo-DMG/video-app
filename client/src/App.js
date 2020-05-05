import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Tutor from "./components/Tutor";
import Home from "./components/Home";
import VideoDetail from "./components/VideoDetail";
import { AppContextProvider } from "./appContext";
// import GoogleLogin from "react-google-login";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={(props) => <LandingPage />} />
          <Route exact path="/tutor" component={(props) => <Tutor />} />
          <Route exact path="/home" component={(props) => <Home />} />
          <Route exact path="/detail" component={(props) => <VideoDetail {...props} />} />
        </Switch>
      </div>
    </AppContextProvider>
  );
}

export default App;
