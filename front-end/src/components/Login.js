import React, { useState } from 'react';
import  { makeStyles } from '@material-ui/styles'
import login from '../assets/login.jpg'

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
        <div className={classes.container}>

            <div>
                <img src={login} alt ="VR" height ="801px" width ="700px" />
            </div>

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
                            onChange ={handleChange} />
                  </label>
                    <button type ="submit" onClick ={handleSubmit} className={classes.button}>
                        Create an account
                    </button>   
                
              </form>
  
        </div>
    )
}   