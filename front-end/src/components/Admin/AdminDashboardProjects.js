import React from 'react'


import {makeStyles} from '@material-ui/core/styles'
import Styled from "styled-components";
import { changeUserRole, deleteUser } from '../../actions/index';


const TitleContainer = Styled.div `
    margin: 30px;
    text-align: left;
    padding: 10px;
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
    font-size: 0.8rem;
    font-family: open-sans;
    
`

const boxDiv = makeStyles({
    rootBigBox:{
        backgroundColor: "#1D2939",
        width: "720px",
        height: "484px",
        marginLeft: "30px"
    }
})

export default function AdminDashboardProjects({dashBoardProjects}){
    const classes = boxDiv()
    return(
        <div>
        <div>
             <TitleContainer>
                <Title>Admin Dashboard</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

            </TitleContainer>
            <div className = {classes.rootBigBox}>
                
            </div>
         </div>  
        </div>
    )
}