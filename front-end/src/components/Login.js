import React, { useState} from 'react';




export default function MemberLogIn() {


    // input state
    const [inputValue,setInputValue] = useState({
        email: "",
        password: ""
       
    })
    const [users,setUsers] = useState([])
    const [id,setID] = useState(0)

    const handleChange = (e) =>{
        setInputValue({...inputValue,[e.target.name] : e.target.value,id});
    }

    const handleSubmit = (e) =>{
    
           // make API call
            setUsers([...users,inputValue]);
            setID(prevId => prevId + 1);
            setInputValue({email: '', password: ''});
            console.log(users);
        };
        
       
        

    return(
        <div>

            <div>

            </div>

            <div>
                <h1>Create an Account</h1>
                <form>
                    <label>
                        Email
                        <input 
                            type ="text" 
                            placeholder ="Enter Email" 
                            name ="email"
                            value = {inputValue.email}
                            id ={id}
                            onChange ={handleChange}

                        />
                    </label>

                    <label>
                        Password
                        <input 
                            type = "password" 
                            placeholder ="Enter Password"
                            name ="password"
                            value = {inputValue.password}
                            id ={id}
                            onChange ={handleChange} 


                        />
          
                  </label>    
             </form>
        </div>
  
    </div>
    )
}   