
// import React, { useState} from 'react';
// import Styled from 'styled-components';




// const Div = Styled.div `
//     display: flex;
//     justify-content: space-evenly; `

// const H1 = Styled.h1 `
//     postition: absolute;
//     width: 265px;
//     height: 102px;
//     left: 930px;
//     top: 130px;
//     font-family: Open Sans;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 44px;
//     line-height: 55px;
//     color: #FEBF10; `

// const Form = Styled.form `
// display: flex;
// flex-direction: column;
// align-content: flex-start;
// justify-content: space-evenly;
// background-color: #7D7D7D;
// `

// const Label = Styled.label `
//     position: absolute;
//     width: 61px;
//     height: 18px;
//     left: 930px;
//     top: 304px;
//     font-family: Open Sans, Condensed;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 10px;
//     line-height: 18px;
//     text-transform: uppercase;
//     color: #CBCFD4; `

// const Input = Styled.input `
//     position: absolute;
//     width: 275px;
//     height: 40px;
//     left: 930px;
//     top: 322px;
//     background: #FFFFFF;
//     border-radius: 3px; `
    
// const Formdiv = Styled.form `
//     position: absolute;
//     width: 43px;
//     height: 18px;
//     left: 930px;
//     top: 397px;
//     font-family: Open Sans, Condensed;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 10px;
//     line-height: 18px;
//     text-transform: uppercase;
//     color: #CBCFD4; 
//     `    

// const InnerContainerText = Styled.div `
//     position: absolute;
//     width: 275px;
//     height: 40px;
//     left: 930px;
//     top: 415px;
//     background: #FFFFFF;
//     border-radius: 3px;
// `    
// const Button = Styled.button `
//     position: absolute;
//     width: 270px;
//     height: 40px;
//     left: 930px;
//     top: 508px;
//     background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
//     border-radius: 20px;`

// const Img = Styled.img `
//     position: absolute;
//     width: 593px;
//     height: 820;
//     left: 0px;
//     top: 80px;
//     background: linear-gradient(90deg, #3C444C 0%,
//         rgba(60, 68, 76, 0) 100%);
//     box-shadow: 0px 30px 40px, rgba(0, 0, 0, 0.1);`    


import React, { useState } from 'react';
import  { makeStyles } from '@material-ui/styles'
import login from '../assets/login.jpg'
import NavBarSignIn from "./NavBarSignIn.js";

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

        <div>
            <NavBarSignIn />
        <div>

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

                  </formdiv>
                  <button type="submit">CREATE ACCOUNT</button>    
             </form>
            </div>
  
        </div>
    </div>

//                   </label>
//                     <button type ="submit" onClick ={handleSubmit} className={classes.button}>
//                         Create an account
//                     </button>   
                
//               </form>
  
//         </div>

    )
}   