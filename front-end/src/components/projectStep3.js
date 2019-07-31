import React, { useState } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const TitleContainer = Styled.div `
    margin: 30px;
    text-align: left;
    padding: 20px;
    background-color: #2d4059;
    paddin-top: -10px;

`

const Title = Styled.h2 `
    color: #e7ae0f;
    font-size: 2.6rem;
    margin-top: 0;
    margin-bottom: -5px;
`

const Paragraph = Styled.p `
    color: #8c96a4;
   
`

function ProjectStep3 ({stepOne, setStepOne, submitProject, history}) {
    console.log(stepOne)

    const handleChange = event => {
        setStepOne({...stepOne, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        submitProject(stepOne);
        history.push("/project-funding")
    }

    
    
    return (
        <div>
         <TitleContainer>
                <Title>Project Funding</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

         </TitleContainer>
         <div>
             <h2>Step 1 - Step 2 - <span> Step 3</span> </h2>
             <form>
                 <p>GIVE USE A QUICK SUMMARY OF YOUR PROJECT PLAN</p>
                 <input type = "text" name = "summary" placeholder = "   Project Description" value = {stepOne.summary} onChange = {handleChange}/>
                 <p>ARE THERE HURDLES THAT PREVENT YOU FROM WORKING ON THIS PROJECT?</p>
                 <input type = "text" name = "handles" placeholder = "   Why should we fund your idea?" value = {stepOne.handles} onChange = {handleChange}/>
                 <div>
                 <button onClick ={handleSubmit}  >Submit Application</button>
                 <Link to ="/project-funding" > <button >Discard Applicaton</button></Link>
                </div>
             </form>
         </div>
        </div>
    )

}

export default ProjectStep3;