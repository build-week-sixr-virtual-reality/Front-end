import React from 'react';
import { Route } from "react-router-dom";



import MemberLogIn from './components/Login.js';
import Dashboard from "./components/Dashboard.js";

import ResetPassword from "./components/ResetPassword.js"
import UserSignUp from './components/UserSignUp'

import DashboardAdmin from "./components/Admin/DashboardAdmin";




function App() {
  
  return (
    <div className="App">
      
      <Route exact path = "/" component = {UserSignUp}/>    
      <Route exact path = "/login"  component = {MemberLogIn}/>
      <Route exact path = "/reset" component = {ResetPassword} />
      <Route path = "/dashboard" component = {Dashboard} />
      <Route path ="/admin" component ={DashboardAdmin} />
   

    
    </div>
  );
}

export default App;
