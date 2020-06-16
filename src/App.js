import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="App">
      <div className="nav-bar">
        
      </div>
      <Switch>
        <Route path="/" component={Login} />
     
      </Switch>
    </div>
  );
}

export default App;
