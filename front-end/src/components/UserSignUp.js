import React,{useState,useEffect} from 'react'; 
import {Link,Route} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import login from '../assets/login.jpg';
import NavBarSignIn from "./NavBarSignIn.js";
import LeftNav from './leftnav';
import { registerUser } from '../actions/index';

// styling
const SignUp = makeStyles({
    container: {
        fontFamily: 'open-sans',
        backgroundColor:'#405168',
        display: 'flex',
        flexDirection:'row',
        width: '100%',
        height: '100%',
        minHeight: '100vh'
        

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
        background: 'linear-gradient(to right, #ee785e, #a255ef)',
        padding: '10px 0px',
        fontSize: '1rem',
        color: '#FFFFFF',
        textAlign: 'center',
        borderRadius: '5px',
        marginTop:'20px',
        marginLeft: '50px',
        width:'81%'
    },
    inputText:{
        padding: '10px 150px 10px 0px',
        borderRadius: '5px'
    }


})


// userSignUp 
export default function UserSignUp(){

    // input state
    const [inputValue,setInputValue] = useState({
        firstName:"Cristiano",
        lastName:"Ronaldo",
        username: "RonaldoFC@gmail.com",
        password: "hello",
        rePassword: "hello"
    })
    const [users,setUsers] = useState([])
    const [id,setID] = useState(0)

    const handleChange = (e) =>{
        setInputValue({...inputValue,[e.target.name] : e.target.value,id})
       
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (inputValue.password !== inputValue.rePassword) {
            alert("Passwords don't match");
        } 
        registerUser(inputValue);
            // make API call
            setUsers([...users,inputValue])
            setID(prevId => prevId + 1)
            console.log(users)
            
            setInputValue({firstName: "",lastName:"",email: '',password: '',rePassword : ''})
       
    }

    const classes = SignUp()

    return(
        <div>
            <NavBarSignIn />
            <div className = {classes.container}>
                <div>
                    <img src ={login} alt ="VR" height ="801px" width ="700px" />
                </div>
                
                <form onSubmit = {handleSubmit} className ={classes.formStyle}>
                    <h1 className= {classes.headerText}>Register an <br/> Account</h1>
                        <label className = {classes.labels}>
                            First Name
                            <input className ={classes.inputText}
                                type ="text" 
                                placeholder ="Enter first name" 
                                name ="firstName"
                                value = {inputValue.firstName}
                                id ={id}
                                onChange ={handleChange}

                            />
                        </label>
                        <label className = {classes.labels}>
                            Last Name:
                            <input className ={classes.inputText}
                                type ="text" 
                                placeholder ="Enter last name" 
                                name ="lastName"
                                value = {inputValue.lastName}
                                id ={id}
                                onChange ={handleChange}

                            />
                        </label>
                        <label className = {classes.labels}>
                            Your Email Address
                            <input className ={classes.inputText}
                                type ="text" 
                                placeholder ="Enter Email" 
                                name ="username"
                                value = {inputValue.username}
                                id ={id}
                                onChange ={handleChange}

                            />
                        </label>

                        <label className = {classes.labels}>
                            Password
                            <input className ={classes.inputText}
                                type = "password" 
                                placeholder ="Enter Password"
                                name ="password"
                                value = {inputValue.password}
                                id ={id}
                                onChange ={handleChange} 


                            />
                        </label>
                   

                   
                        <label className = {classes.labels}>
                            Retype Password
                            <input className ={classes.inputText}
                                type ="password" 
                                placeholder ="Re-Enter Password"
                                name ="rePassword"
                                value ={inputValue.rePassword} 
                                id ={id}
                                onChange ={handleChange}

                        />
                    </label>
                    

                    <button type ="submit" onClick ={handleSubmit} className ={classes.button} >
                                <Link to = "/dashboard"> Create an Account</Link>
                                
                    </button>
                    <p>Already have an account?<span><Link to = "/login">Sign-in here</Link></span></p>
                    
                </form>

                

                
            </div>

        
               
        </div>
    )
}

