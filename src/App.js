import React from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navigation from "./Navigations";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
    </Router>
  );
}

export default App;
