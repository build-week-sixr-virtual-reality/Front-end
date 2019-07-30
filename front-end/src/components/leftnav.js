import React from "react";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../App.css";


// Images
import DashboardImage from "../assets/icons/dashboardTabEdit.png";
import ProjectFundingImage from "../assets/icons/fundingTabEdit.png";
import ResourcesImage from "../assets/icons/ResourcesTabEdit.png";
import MentoringImage from "../assets/icons/mentoringtabEdit.png";
import SettingsImage from "../assets/icons/settingsTabEdit.png";
import LogoutImage from "../assets/icons/LogoutTabEdit.png";

const Container = Styled.div `
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 256px;
    min-height: 100vh;
    heigth: 100%;
    background-color: #1d2838;

`

const NamePic = Styled.div `
    width: 234px;
    height: 200px;
    margin: 0 auto 0 auto;
    
    display: flex;
    flex-direction: column;
    padding: 10px 10px 5px 10px;
    justify-content: center;
    align-items: center;
    color: #afbdd1;


`

const Image = Styled.img `
    border-radius: 50%;
    width: 112px;
    height: 112px;
    object-fit: cover;

`

const IconLinkDiv = Styled.div `
    margin: 10px 0 10px 0;
    width: 234px;
    background-color: 
    
   

`

const HR = Styled.hr `
     width: 252px;
     border: .5px solid #56657f;
     opacity: .5;
     
`




// const Active = Styled.div `
//     background-color: #2b3648;
// `

function LeftNav() {
    return (
        <Container>

            {/* Top div with name and picture */}
            <NamePic>
                <Image alt = "stock-pic" src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <h3>Insert Name</h3>
            </NamePic>

            {/* Middle div with icons and links */}
            <IconLinkDiv>
                <NavLink to ="/dashboard" style = {{textDecoration: "none"}} activeClassName ="activeDashboard" exact>
                    <img src = {DashboardImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
              

                <NavLink to ="/project-funding" style = {{textDecoration: "none"}} activeClassName ="activeProjectFunding" exact>
                    <img src = {ProjectFundingImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
              
                <NavLink to ="/resources" style = {{textDecoration: "none"}} activeClassName ="activeResources" exact>
                    <img src = {ResourcesImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
                

                <NavLink to ="/mentoring" style = {{textDecoration: "none"}} activeClassName ="activeMentoring" exact>
                    <img src = {MentoringImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
                
                <NavLink to ="/settings" style = {{textDecoration: "none"}} activeClassName ="activeSettings" exact>
                    <img src = {SettingsImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>

                

            </IconLinkDiv>
            <HR />

            {/* Settings div */}
            <IconLinkDiv>
                <NavLink to ="/logout" style = {{textDecoration: "none"}} activeClassName ="activeLogout" exact>
                    <img src = {LogoutImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
            </IconLinkDiv>
        </Container>

    )

}

export default LeftNav;