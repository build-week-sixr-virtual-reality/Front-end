import React from "react";
import { Link, Route } from "react-router-dom";
import Styled from "styled-components";


import DeleteIcon from "../assets/icons/delete.png";


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


const DivContainer = Styled.div `
    background-color: #1d2939;
    max-width: 720px;
    height: 550px;
    margin: 20px 30px 30px 30px;
    padding: 20px;
`

const InnerDiv = Styled.div `
    height: 48px;
    margin: 10px;
    background-color: #405168;
    display: flex;
`

const ProjectP = Styled.p `
    margin: auto 10px auto 10px;
`


function ProjectFunding ({projects}) {
    console.log(projects)
    return (
        <div>
            
            {/* <Route path = "/project-funding/step2" component = {ProjectStep2}></Route> */}
            <TitleContainer>
                <Title>Project Funding</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

            </TitleContainer>
            <DivContainer>
                <Link to ="/project-funding/step1"><button>Add Project</button></Link>
                {projects.map(project => {
                    return (
                        <InnerDiv>
                            <ProjectP>{project.title}</ProjectP>
                            <p>-</p>
                            <ProjectP>{project.description}</ProjectP>
                            <img src ={DeleteIcon} alt = "Delete project" style = {{width: "30px", height: "35px"}} />
                          
                        </InnerDiv>
                    ) 
                })}
                
            </DivContainer>
        </div>
    )
}

export default ProjectFunding;