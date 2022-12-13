import React from 'react';
import {Route, Link, Navigate,BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import User from "./User";
import  Visit from "./Visit"
import notfound from "./NotFound"

const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="./App.js">Home</Link></li>
        <li><Link to="./User.js">User</Link></li>
        <li><Link to="./Visit.js">Visit</Link></li>
      </ul>
    </div>
    <Navigate>
    <Route exact path="/" component={App}/> 
    <Route path="/user" component={User}/> 
    <Route path="/visit" component={Visit}/>
    <Route  component={notfound}/>
    </Navigate>
  </Router>
)

React.render(routing,document.getElementById("root"));
