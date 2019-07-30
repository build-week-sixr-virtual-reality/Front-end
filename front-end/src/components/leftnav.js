import React from "react";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";


// Images
import DashboardImage from "../assets/icons/Dashboard.png";
import ProjectFundingImage from "../assets/icons/Project-funding.png";
import ResourcesImage from "../assets/icons/resources.png";
import MentoringImage from "../assets/icons/Mentoring.png";
import PreferencesImage from "../assets/icons/Preferences.png";
import SIXRProfileImage from "../assets/icons/SIXR-Profile.png";

const Container = Styled.div `
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 224px;
    min-height: 100vh;
    heigth: 100%;
    background-color: #1d2838;

`

const NamePic = Styled.div `
    width: 204px;
    height: 120px;
    margin: 0 auto 0 auto;
    
    display: flex;
    flex-direction: column;
    padding: 10px 10px 5px 10px;
    justify-content: flex-end;
    color: #afbdd1;


`

const Image = Styled.img `
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;

`

const IconLinkDiv = Styled.div `
    margin: 10px 15px 10px 5px;
    width: 204px;
    
   

`

const Icon = Styled.img `
    width: 18px;
    height: 18px;
    padding: 5px;
    
`
const IconDiv = Styled.div `
    padding: 0 auto 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto 5px 0;
    justify-content: space-between;
    
    

`

const Span = Styled.span `
    color: #e7ae0f;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: .1px;
    text-align: center;
    width: 151px;
    padding-left: 20px;
    text-align: left;
    
`

const Arrow = Styled.p `
    color: #e7ae0f;
    display: flex;
    
`;

const HR = Styled.hr `
     width: 222px;
     border: .5px solid #56657f;
     opacity: .5;
     
`

const SettingsP = Styled.p `
    margin-left: 5px;
    color: #56657f;
    margin-top: -5px;
    font-size: 14px;
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
            <HR />

            {/* Middle div with icons and links */}
            <IconLinkDiv>
                <NavLink to ="#" style = {{textDecoration: "none"}} activeClassName = "">
                    <IconDiv>
                        <Icon src={DashboardImage} />
                        <Span>DashBoard</Span>
                        <Arrow>></Arrow>
                    </IconDiv>
                </NavLink> 

                <NavLink to ="#" style = {{textDecoration: "none"}}>
                    <IconDiv>
                        <Icon src={ProjectFundingImage} />
                        <Span>Project Funding</Span>
                        <Arrow>></Arrow>
                    </IconDiv>
                </NavLink>

                <NavLink to ="#" style = {{textDecoration: "none"}}>
                    <IconDiv>
                        <Icon src={ResourcesImage} />
                        <Span>Resources</Span>
                        <Arrow>></Arrow>
                    </IconDiv>
                </NavLink>

                <NavLink to ="#" style = {{textDecoration: "none"}}>
                    <IconDiv>
                        <Icon src={MentoringImage} />
                    <Span>Mentoring</Span>
                        <Arrow>></Arrow>
                    </IconDiv>
                </NavLink>

            </IconLinkDiv>
            <HR />

            {/* Settings div */}
            <IconLinkDiv>
                <SettingsP>Settings</SettingsP>
                <NavLink to ="#" style = {{textDecoration: "none"}}>
                    <IconDiv>
                        <Icon src={PreferencesImage} />
                        <Span>Preferences</Span>
                    </IconDiv>
                </NavLink>
                <NavLink to ="#" style = {{textDecoration: "none"}}>
                    <IconDiv>
                        <Icon src={SIXRProfileImage} />
                        <Span>SIXR Profile</Span>
                    </IconDiv>
                </NavLink>

            </IconLinkDiv>
        </Container>

    )

}

export default LeftNav;