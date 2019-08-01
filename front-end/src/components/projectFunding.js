import React from "react";
import { Link } from "react-router-dom";
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
    height: 100%;
    max-width: 720px;
    margin: 20px 30px 30px 30px;
    padding: 20px;
`

const InnerDiv = Styled.div `
    height: 48px;
    margin: 10px;
    padding: 0 10px 0 10px;
    background-color: #405168;
    display: flex;
    justify-content: space-between;
`

const ProjectP = Styled.p `
    margin: auto 10px auto 10px;
    color: #c5cad1;
    font-weight: bold;
`

const AddProjectButton = Styled.button `
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
const Image = Styled.img `
    margin-top: 5px;

`


function ProjectFunding ({projects}) {
    console.log(projects)
    return (
        <div>
        <div>
            
            {/* <Route path = "/project-funding/step2" component = {ProjectStep2}></Route> */}
            <TitleContainer>
                <Title>Project Funding</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

            </TitleContainer>
            <DivContainer>
                <Link to ="/dashboard/funding/step1" style ={{textDecoration: "none"}}><AddProjectButton>SUBMIT NEW PROJECT</AddProjectButton></Link>
                {projects.map(project => {
                    return (
                        <InnerDiv>
                            <ProjectP>{project.title}</ProjectP>
                            <Image src ={DeleteIcon} alt = "Delete project" style = {{width: "30px", height: "35px"}} />
                          
                        </InnerDiv>
                    ) 
                })}
                
            </DivContainer>
        </div>
        </div>
    )
}

export default ProjectFunding;