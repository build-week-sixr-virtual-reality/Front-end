import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";




const TitleContainer = Styled.div `
    margin: 30px 30px 0 30px;
    text-align: left;
    padding: 20px;
    background-color: #2d4059;
    

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

const FormDiv = Styled.div `
    margin: 0 30px 30px 30px;
    height: 100%;
    background-color: #ecf9fe;
    text-align: left;
    padding: 30px 70px 50px 70px;

`

const Steps = Styled.h2 `
    font-size: 2.6rem;
    font-weight: bold;
    color: #c5cad1;
`
const CurrentStep = Styled.span `
    text-decoration: underline;
    color: #2b3648;
`

const Info = Styled.p `
    color: #2b3648;
    font-size: .6rem;
    font-weight: bold;
    margin-bottom: 5px;

`

const TitleInput = Styled.input `
    border: none;
    height: 30px; 
    width: 70%;
`

const OtherInput = Styled.textarea `
    border: none;
    width: 70%;
    height: 140px;
    display: flex;
    align-content: flex-start;

`

const ButtonsDiv = Styled.div `
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: row;
`

const NextButton = Styled.button `
    display: flex;
    justify-content: center;
    margin: 10px 10px 20px 10px;
    padding: 10px 10px;
    width: 90px;
    border-radius: 25px;
    color: #405168;
    background: linear-gradient(to right, #35c6f2, #a3d89b);
    border: none;
    font-weight: bold;
    font-size: .6rem;
`

const DiscardButton = Styled.button  `
    display: flex;
    justify-content: center;
    margin: 10px 10px 20px 10px;
    padding: 10px 10px;
    width: 140px;
    border-radius: 25px;
    color: black;
    border: none;
    font-weight: bold;
    font-size: .6rem;
    border: 1px solid black;
    background-color: #ecf9fe;

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
         <FormDiv>
             <Steps><CurrentStep>Step 1</CurrentStep> - Step 2 - Step 3</Steps>
             <form onSubmit = {handleSubmit}>
                 <Info>PROJECT TITLE</Info>
                 <TitleInput type = "text" name = "title" placeholder = "   Project Title" value = {stepOne.title} onChange = {handleChange}/>
                 <Info>PROJECT DESCRIPTION</Info>
                 <OtherInput type = "text" name = "description" maxlength="1000" placeholder = "   Project Description" value = {stepOne.description} onChange = {handleChange}/>
                 <Info>WHY SHOULD WE FUND YOUR IDEA?</Info>
                 <OtherInput type = "text" name = "why" maxlength="1000" placeholder = "   Why should we fund your idea?" value = {stepOne.why} onChange = {handleChange}/>
                 <ButtonsDiv>
               <Link to="/dashboard/funding/step2" style = {{textDecoration: "none"}} ><NextButton >NEXT STEP</NextButton></Link> 
               <Link to ="/dashboard/funding"  style = {{textDecoration: "none"}}  > <DiscardButton >DISCARD APPLICATION</DiscardButton></Link>
                </ButtonsDiv>
             </form>  
         </FormDiv>
        </div>
    )

}

export default ProjectStep1;