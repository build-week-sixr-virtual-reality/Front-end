
import React, { useState } from 'react';
import  { makeStyles } from '@material-ui/styles';
import Styled from "styled-components";
import login from '../assets/login.jpg';
import NavBarSignIn from "./NavBarSignIn.js";
import {Link} from 'react-router-dom'


const LogIn = makeStyles({
    container: {
        fontFamily: 'open-sans',
        backgroundColor:'#405168',
        display: 'flex',
        flexDirection:'row',
        width: '100%',
        height: '100%',
        minHeight: '100vh'   


    },
    container2:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    headerText:{
        color: '#FEBF10',
        fontSize: '3rem'
    },
    formStyle:{
        display: 'flex',
        flexDirection:'column',
        marginLeft: "180px",
        marginTop: '30px'
        
        
    },
    labels:{
        color: '#C2C7CD',
        fontSize: '0.8rem',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        marginRight:"20px",
        textAlign: 'left',
        marginLeft: '50px'
        
        
        
    },
    button:{
    
        width: '270px',
        height: '40px',        
        marginTop: '5px',
        marginBottom: '5px',        
        top: '508px',        
        borderRadius: '20px',
        background: 'linear-gradient(to right, #ee785e, #a255ef)',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '10px',
        lineHeight: '14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textTransform: 'uppercase',
        color: '#FFFFFF'
        
    },    
    buttondiv:{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
   
    inputText:{
        padding: '10px 150px 10px 0px',
        borderRadius: '5px',        
    
    }

})

const A = Styled.a `
   position: absolute;
   width: 73px;
   height: 18px;
   left: 1170px;
   top: 451px;
   font-family:Open Sans Condensed;
   font-style: normal;
   font-weight: 300;
   font-size: 10px;
   line-height: 18px;
   text-decoration: underline;
   color: #CBCFD4;
 `
export default function UserLogIn() {


    // input state
    const [inputValue,setInputValue] = useState({
        email: "",
        password: ""
       
    })
    const [users,setUsers] = useState([])
    const [id,setID] = useState(0)

    const handleChange = (e) =>{
        setInputValue({...inputValue,[e.target.name] : e.target.value, id});
    }

    
    const handleSubmit = (e) =>{
    
           // make API call
            setUsers([...users,inputValue]);
            setID(prevId => prevId + 1);
            setInputValue({email: '', password: ''});
            console.log(users);
        };
        
       
       const classes = LogIn()

    return(

        <div>
            <NavBarSignIn />
        

        <div className={classes.container}>


            <div>
                <img src={login} alt ="VR" height ="801px" width ="700px" />
            </div>
            <div className={classes.container2}>
              <form className={classes.formStyle}>
                <h1 className= {classes.headerText}>Access your dashboard</h1>
                
                    <label className={classes.labels}>
                        EMAIL ADDRESS
                        <input className={classes.inputText}
                            type ="text" 
                            placeholder ="hello@sixr.tv" 
                            name ="email"
                            value = {inputValue.email}
                            id ={id}
                            onChange ={handleChange}

                        />
                    </label>

                    <label className={classes.labels}> 
                        PASSWORD
                        <input className={classes.inputText}
                            type = "password" 
                            placeholder ="Enter Password"
                            name ="password"
                            value = {inputValue.password}
                            id ={id}
                            />
                    </label>

                    <A href="">Forgot Password?</A> 
                    <div className={classes.buttondiv}>
                    <button type ="submit" onClick ={handleSubmit} className ={classes.button}>
                                <Link to = "/dashboard"> Create an Account</Link>
                    </button>                
                                                           
                    <button type ="submit" onClick ={handleSubmit} className={classes.button}>
                            <Link to = "/dashboard">Admin</Link>     
                    </button>
                                    
                    <button type ="submit" onClick ={handleSubmit} className={classes.button}>
                            <Link to = "/dashboard">Users</Link>
                    </button>                                     
                    </div>            
               </form>
            </div>      
        </div>
    </div>
 ) 

}