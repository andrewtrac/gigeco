import React from 'react';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration';

function App() {

  return (
    <HashRouter basename='/'>
    <div>
     <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/registration">Registration</Link></li>
     </ul>
     <hr />
     <Route exact path="/login" component={Login} />
     <Route path="/registration" component={Registration} />
     <Route path="/home" component={Home} />
    </div>
   </HashRouter>
  );
}

export default App;
