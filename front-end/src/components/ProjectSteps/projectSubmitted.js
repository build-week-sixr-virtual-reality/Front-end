import React, { useEffect } from "react";
import Styled from "styled-components";
import Project from "../project";
import { Route } from "react-router-dom";





const TitleContainer = Styled.div `
    margin: 0 30px 30px 30px;
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
    margin: 30px 30px 0 30px;
    height: 500px;
    background-color: #ecf9fe;
    text-align: left;
    padding: 30px 70px 50px 70px;

`
const SubmittedText = Styled.h2 `
    text-align: left;
    font-size: 2.6rem;
    font-weight: bold;
`



function ProjectSubmitted () {

      
       useEffect(() => {
             setTimeout(() => { 
              } , 1000)
            return () => {
                return <Route path ="/dashboard/funding" />
                }
        }, []);

    return (
        <div >
         <TitleContainer>
                <Title>Project Funding</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

         </TitleContainer>
         <FormDiv>
             <SubmittedText>Funding Application</SubmittedText>
             <SubmittedText>Submitted!</SubmittedText>
            
         </FormDiv>
        </div>
    )

}

export default ProjectSubmitted;