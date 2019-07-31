import React, { useState } from "react";
import Styled from "styled-components";
import { Link, Route } from "react-router-dom";
import ProjectStep2 from "./projectStep2";


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

function ProjectStep1 ({setStepOne, stepOne}) {
    console.log(stepOne);

    const handleChange = event => {
        setStepOne({...stepOne, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
    }



    return (
        <div>
         <TitleContainer>
                <Title>Project Funding</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

         </TitleContainer>
         <div>
             <h2><span>Step 1</span> - Step 2 - Step 3</h2>
             <form onSubmit = {handleSubmit}>
                 <p>PROJECT TITLE</p>
                 <input type = "text" name = "title" placeholder = "   Project Title" value = {stepOne.title} onChange = {handleChange}/>
                 <p>PROJECT DESCRIPTION</p>
                 <input type = "text" name = "description" placeholder = "   Project Description" value = {stepOne.description} onChange = {handleChange}/>
                 <p>WHY SHOULD WE FUND YOUR IDEA?</p>
                 <input type = "text" name = "why" placeholder = "   Why should we fund your idea?" value = {stepOne.why} onChange = {handleChange}/>
                 <div>
               <Link to="/project-funding/step2" ><button >Next Step</button></Link> 
               <Link to ="/project-funding" > <button >Discard Applicaton</button></Link>
                </div>
             </form>
         </div>
         <Route exact path ="/project-funding/step2" component = {ProjectStep2} />
        </div>
    )

}

export default ProjectStep1;