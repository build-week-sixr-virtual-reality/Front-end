import React from 'react';
import Styled from "styled-components";

const MajorDiv = Styled.div `
    display:flex;
    flex-direction: row;
    

`

const TitleContainer = Styled.div `
    margin: 30px;
    text-align: left;
    padding: 20px;
    background-color: #2d4059;
    paddin-top: -10px;
    height: 120px

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
const DivBlocks = Styled.div `
    margin: 10px 20px 10px 20px;
    text-align: left;
    padding: 20px;
    background-color: #1D2939;
    height: 120px;
    width: 80%;
    border-radius: 10px

`

const HeaderTwo = Styled.h2 `
    color: #e7ae0f;
    font-size: 2rem;
    text-align:center;

`

const BigDiv = Styled.div `
    background-color: #1D2939;
    height: 530px;
    width: 355px;
    margin-top: 18px
    border-radius: 5px
 
    
`

export default function Resources(){
    return(
        <div style = {{width: '100%'}}>
            
                <TitleContainer>
                    <Title>Acess Resources</Title>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

                </TitleContainer>
                <MajorDiv>
                    <div>
                        <DivBlocks>
                            <HeaderTwo>
                                Tutorial: AR:Painting
                            </HeaderTwo>
                        </DivBlocks>

                        <DivBlocks>
                            <HeaderTwo>
                                Tutorial: Choosing a VR Framework
                            </HeaderTwo>
                        </DivBlocks>

                        <DivBlocks>
                            <HeaderTwo>
                            Project Management Guide
                            </HeaderTwo>
                        </DivBlocks>

                        <DivBlocks>
                            <HeaderTwo>
                                Tutorial: Various Applications for XR
                            </HeaderTwo>
                        </DivBlocks>
                    </div>
                

               
                    <div>
                        <BigDiv>

                        </BigDiv>
                    </div>
                </MajorDiv>
        </div>
        
    )
}