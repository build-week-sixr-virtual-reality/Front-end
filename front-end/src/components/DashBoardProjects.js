import React from 'react'
import DashBoardBoxes from './DashBoardBoxes'
import {makeStyles} from '@material-ui/core/styles'
import Styled from "styled-components";

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
        height: "484px"
    }
})

export default function DashBoardProjects(){
    const classes = boxDiv()
    return(
        <div>
             <TitleContainer>
                <Title>Dashboard</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

            </TitleContainer>
            <div>
                <DashBoardBoxes />
            </div>
        </div>
    )
}