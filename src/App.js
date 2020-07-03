import React, {Component} from 'react';
import './App.css';

import { BrowserRouter, Route} from "react-router-dom";
import WeatherPage from './Dibs/Dibs';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Route path="/" component={WeatherPage} />
      </BrowserRouter>
  </div>
  );
}

export default App;
