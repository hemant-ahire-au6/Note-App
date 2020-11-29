import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './index.css';

import Nav from './component/Nav';
import HomePage from "./HOC/HomePage";
import Todo from "./HOC/Todo";


function App() {
  return (
    <Router>
      <Nav name />
      <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/post' component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
