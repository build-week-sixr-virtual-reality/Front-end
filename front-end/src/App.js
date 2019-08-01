import React from 'react';
import { Route } from "react-router-dom";


// import ResetPassword from "./components/ResetPassword.js";
import UserSignUp from './components/UserSignUp.js';
import MemberLogIn from './components/Login.js';
import Dashboard from "./components/Dashboard.js";
import DashboardAdmin from "./components/Admin/DashboardAdmin";



function App() {
  
  return (
    <div className="App">
      
      <Route exact path = "/" component = {UserSignUp}/>
      <Route exact path = "/login"  component = {MemberLogIn}/>
      <Route path = "/dashboard" component = {Dashboard} />
      <Route path ="/admin" component ={DashboardAdmin} />
   

    
    </div>
  );
}

export default App;
