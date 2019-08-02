import React from 'react';

// import ResetPassword from "./components/ResetPassword.js";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import Logo from "../assets/logo.png";


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
    backgroundColor: "#e7ae0f",
    color: "#2d4059"
    
  },

  logoSIXR: {
    width: "97px",
    height: "30px",
    display: "flex",
    justifyContent: "flex-start"
  }

})); 


function NavBarDashboard() {
  const classes = useStyles();
  return (
    <div>
     
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className ={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
          <a href="https://sixr.netlify.com/index.html" ><img className={classes.logoSIXR} src = {Logo} alt ="SIXR logo" /></a>
          </Typography>
        
        </Toolbar>
      </AppBar>
      {/* <Route path = "/" exact component = {}/> */}
      {/* <Route path = "/register" component = {UserSignUp}/>
      <Route exact path = "/login"  component = {MemberLogIn}/>
      <Route path = "/dashboard" component = {Dashboard} />
       */}
     
    </div>
   

    
    </div>
  );
}

export default NavBarDashboard;
