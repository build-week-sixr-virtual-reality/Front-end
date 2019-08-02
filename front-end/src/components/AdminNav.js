import React,{useState} from "react";
import Styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import "../App.css";

// import CalendarDate from "./Calendar.js";

import AdminDashboardProjects from "./Admin/AdminDashboardProjects";
// import Project from './project.js';
import AdminFunding from "./Admin/AdminFunding.js";




// Images
import DashboardImage from "../assets/icons/dashboardTabEdit.png";
import ProjectFundingImage from "../assets/icons/fundingTabEdit.png";
import ResourcesImage from "../assets/icons/ResourcesTabEdit.png";
import MentoringImage from "../assets/icons/mentoringtabEdit.png";
// import SettingsImage from "../assets/icons/settingsTabEdit.png";
import LogoutImage from "../assets/icons/LogoutTabEdit.png";
import Mentoring from "./Mentoring";
import AdminResourcesHub from "./Admin/AdminResourcesHub.js";



const MainContainer = Styled.div `
    width: 100%;
    display: flex;
`



const Container = Styled.div `
    justify-content: left;
    max-width: 256px;
    height: 100%;
    min-height: 950px;
    background-color: #1d2838;
    margin: 0;
   
    

`

const NamePic = Styled.div `
    width: 234px;
    height: 200px;
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

const Name = Styled.h3 `
    width: 170px;

`




// const Active = Styled.div `
//     background-color: #2b3648;
// `

function AdminNav() {
   const [dashBoardProjects, setDashBoardProjects] = useState([{id: "0", title: "test", description: "test", why: "test", impact: "test", amount: "$1", summary: "test", handles: "test"}]);
   const [projects, setProjects] = useState([{id: "0", title: "test", description: "test", why: "test", impact: "test", amount: "$1", summary: "test", handles: "test"},]);
   console.log(dashBoardProjects);




    return (
        <MainContainer>
        <Container>

            {/* Top div with name and picture */}
            <NamePic>
                <Image alt = "stock-pic" src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <Name></Name>
                <Name>Admin</Name>
            </NamePic>

            {/* Middle div with icons and links */}
            <IconLinkDiv>
                <NavLink to ="/admin/dashboard" style = {{textDecoration: "none"}} activeClassName ="activeDashboard" exact>
                    <img src = {DashboardImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
              

                <NavLink to ="/admin/funding" style = {{textDecoration: "none"}} activeClassName ="activeProjectFunding">
                    <img src = {ProjectFundingImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
              

                <NavLink to ="/admin/mentoring" style = {{textDecoration: "none"}} activeClassName ="activeMentoring" exact>
                    <img src = {MentoringImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>

                <NavLink  to ="/admin/resources" style = {{textDecoration: "none"}} activeClassName ="activeResources">
                    <img src = {ResourcesImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
                
                {/* <NavLink to ="/dashboard/settings" style = {{textDecoration: "none"}} activeClassName ="activeSettings" exact>
                    <img src = {SettingsImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink> */}

                

            </IconLinkDiv>
            <HR />

            {/* Settings div */}
            <IconLinkDiv>
                <NavLink to ="/login" style = {{textDecoration: "none"}} activeClassName ="activeLogout" exact>
                    <img src = {LogoutImage} alt = "dashboard yellow link" style = {{width: "256px", ZIndex: "-1", }} />
                </NavLink>
            </IconLinkDiv>

        </Container>

        {/* <Route exact path = "/dashboard"  render = {props => {
            return <DashBoardProjects {...props} dashBoardProjects = {dashBoardProjects} />
        }}/> */}

        <Route exact path = "/admin/dashboard"  render = {props => {
            return <AdminDashboardProjects {...props} dashBoardProjects = {dashBoardProjects} />
        }}/>


        <Route path = "/admin/funding"  render = {props => {
            return <AdminFunding {...props} dashBoardProjects ={dashBoardProjects} setDashBoardProjects = {setDashBoardProjects} projects= {projects} setProjects = {setProjects}/> 
            }} />
        <Route  path = "/Admin/resources" component = {AdminResourcesHub}/>
        <Route exact path = "/admin/mentoring" component = {Mentoring} />


        </MainContainer>
    )

}

export default AdminNav;