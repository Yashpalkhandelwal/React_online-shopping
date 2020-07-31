import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Router path= "/checkout">
          <h1>checkout</h1>
        </Router>
        <Router path= "/login">
          <h1>LOG IN</h1>
        </Router>
        <Router path= "/">
          <h1>HOME PAGE</h1>
        </Router>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
