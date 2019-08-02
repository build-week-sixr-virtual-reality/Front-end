import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { addProject } from '../../actions/index.js';
import {useDispatch} from "react-redux";



const TitleContainer = Styled.div `
    margin: 30px 30px 0 30px;
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
    width: 140px;
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

const DashSpan = Styled.span `
    color: #2b3648;
`

function ProjectStep3 ({stepOne, setStepOne, submitProject, history}) {

    // const dispatch = useDispatch();
    console.log(stepOne)

    const handleChange = event => {
        setStepOne({...stepOne, [event.target.name]: event.target.value})
        // dispatch(addProject(stepOne))
    }

    const handleSubmit = event => {
        event.preventDefault();
        // addProject(stepOne);
        submitProject(stepOne);
        history.push("/dashboard/funding/submitted")
    }

    
    
    return (
        <div>
         <TitleContainer>
                <Title>Project Funding</Title>
                <Paragraph>Please answer a few questions about your project. Our panel will review your application and make a desicion on wheter or not to fund your idea. Please feel free to contact us if you have any questions! Reach us via email: support@sixr.tv</Paragraph>

         </TitleContainer>
         <FormDiv>
             <Steps><CurrentStep>Step 1 </CurrentStep><DashSpan>-</DashSpan><CurrentStep>Step 2</CurrentStep><DashSpan> - </DashSpan><CurrentStep>Step 3</CurrentStep>  </Steps>
             <form>
                 <Info>GIVE USE A QUICK SUMMARY OF YOUR PROJECT PLAN</Info>
                 <OtherInput type = "text" name = "summary" placeholder = "   Project Description" value = {stepOne.summary} onChange = {handleChange}/>
                 <Info>ARE THERE HURDLES THAT PREVENT YOU FROM WORKING ON THIS PROJECT?</Info>
                 <OtherInput type = "text" name = "handles" placeholder = "   Why should we fund your idea?" value = {stepOne.handles} onChange = {handleChange}/>
                 <ButtonsDiv>
                 <NextButton onClick ={handleSubmit}  >SUBMIT APPLICATION</NextButton>
                 <Link to ="/dashboard/funding" style = {{textDecoration: "none"}}> <DiscardButton >DISCARD APPLICATION</DiscardButton></Link>
                </ButtonsDiv>
             </form>
         </FormDiv>
        </div>
    )

}

export default ProjectStep3;