import React from 'react';

import ResetPassword from "./components/ResetPassword.js";
import UserSignUp from './components/UserSignUp.js';
import MemberLogIn from './components/Login.js';

import { NavLink, Route } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';








const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "open-sans",
  },
  toolbar: {
    backgroundColor: '#2d4059',
  },
 
  buttonFont: {
    fontSize: ".7rem",
    margin: "5px",
    fontFamily: "open-sans"
  },

  loginButton: {
    fontSize: ".7rem",
    border: "1px solid white",
    borderRadius: "25px",
    padding: "5px 10px",
    margin: "5px",
    fontFamily: "open-sans"
  },

  registerButton: {
    fontSize: ".7rem",
    borderRadius: "25px",
    padding: "5px 10px",
    margin: "5px",
    fontFamily: "open-sans",
    background: "linear-gradient(to right, #ee785e, #c967a4)",
  },

  activeTab: {
    color: "white",
    // borderBottom:  "5px solid linear-gradient(to right, #ee785e, #c967a4)",
  }

})); 


function App() {
  const classes = useStyles();
  return (
    <div className="App">
     
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className ={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Logo here
          </Typography>
          <NavLink to="#" style ={{textDecoration: "none", color: "white"}} ><Button className={classes.buttonFont} color="inherit">Home</Button></NavLink>
          <NavLink to="#" style ={{textDecoration: "none", color: "white"}} ><Button className={classes.buttonFont} color="inherit">Resources</Button></NavLink>
          <NavLink to="#" style ={{textDecoration: "none", color: "white"}} ><Button className={classes.buttonFont} color="inherit">Mentor Area</Button></NavLink>
          <NavLink to="#" style ={{textDecoration: "none", color: "white"}} ><Button className={classes.buttonFont} color="inherit">Contact</Button></NavLink>
          <NavLink to="/login" style ={{color: "white", textDecoration: "none"}} ><Button className={classes.loginButton}  color="inherit">Login</Button></NavLink>
          <NavLink to="/register" style ={{color: "white", textDecoration: "none"}} ><Button className={classes.registerButton} color="inherit">Register</Button></NavLink>
        </Toolbar>
      </AppBar>
      {/* <Route path = "/" exact component = {}/> */}
      <Route path = "/register" component = {UserSignUp}/>
      <Route path = "/login"  component = {MemberLogIn}/>
      
      
      

     
    </div>

    </div>
  );
}

export default App;
