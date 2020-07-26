import React from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./Navigations";

function App() {
  return (
    <div className='app'>
      <Router>
        <Redirect to='/home'></Redirect>
        <Navigation></Navigation>{" "}
      </Router>
    </div>
  );
}

export default App;
