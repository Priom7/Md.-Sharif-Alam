import React from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigations";

function App() {
  return (
    <div className='app'>
      <Router>
        <Navigation></Navigation>
      </Router>
    </div>
  );
}

export default App;
