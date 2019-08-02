
import React, { useState } from 'react';
import  { makeStyles } from '@material-ui/styles';
import Styled from "styled-components";
import loginImg from '../assets/login.jpg';
import NavBarSignIn from "./NavBarSignIn.js";
import { Link } from 'react-router-dom'
import { login } from '../actions/index'
import {useDispatch} from "react-redux";



const LogInStyles = makeStyles({
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
export default function UserLogIn(props) {
    // console.log(props);

    // input state
    const [inputValue,setInputValue] = useState({
        username: "",
        password: ""
       
    })
    const [users,setUsers] = useState([])
    const [id,setID] = useState(0)

    const handleChange = (e) =>{
        setInputValue({...inputValue,[e.target.name] : e.target.value, id});
    }

    const dispatch = useDispatch();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(inputValue));

    

        // console.log(login)
        // console.log(inputValue.username, inputValue.password)
           // make API call
            setUsers([...users,inputValue]);
            setID(prevId => prevId + 1);
            setInputValue({email: '', password: ''});
            props.history.push("/dashboard");
          
        }
        
        const handleSubmitAdmin = (e) => {
            e.preventDefault();
            login(inputValue);
            // console.log(login)
            // console.log(inputValue.username, inputValue.password)
               // make API call
                setUsers([...users,inputValue]);
                setID(prevId => prevId + 1);
                setInputValue({email: '', password: ''});
                props.history.push("/admin/dashboard");
               
            };
       
       const classes = LogInStyles()

    return(

        <div>
            <NavBarSignIn />
        

        <div className={classes.container}>


            <div>
                <img src={loginImg} alt ="VR" height ="801px" width ="700px" />
            </div>
            <div className={classes.container2}>
              <form className={classes.formStyle}>
                <h1 className= {classes.headerText}>Access your dashboard</h1>
                
                    <label className={classes.labels}>
                        EMAIL ADDRESS
                        <input className={classes.inputText}
                            type ="text" 
                            placeholder ="hello@sixr.tv" 
                            name ="username"
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

                            onChange ={handleChange} /> 
                      




                  </label>
                     
                     <Link style ={{marginTop: '20px',paddingLeft: '50px'}} to ="/reset">Reset Password</Link>

                    <button className = {classes.buttonAdmin} onClick ={handleSubmitAdmin}>Admin Sign In</button>


                    <button style ={{paddingLeft: '100px', textAlign: 'center',marginLeft:'80px',paddingRight:'0px',fontSize : "0.9rem"}} type ="submit" onClick ={handleSubmit} className={classes.button}>
                        SignIn

                    </button>   
              </form>
  
        </div>
        </div>
    </div>
    )
}   




