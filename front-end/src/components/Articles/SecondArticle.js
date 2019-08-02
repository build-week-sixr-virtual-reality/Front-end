import React from 'react'
import Styled from "styled-components";
import article2 from '../../assets/ArticleImages/article2.jpg'
import article22 from '../../assets/ArticleImages/article22.jpg'




const TitleContainer = Styled.div `
    margin: 30px 30px 0px 30px;
    text-align: left;
    padding: 20px 20px 20px 20px;
    background-color: #2D4059 ;
    paddin-top: -10px;
    height: 120px
    width: 91.5%
    text-align: left


`

const Title = Styled.h2 `
    color: #e7ae0f;
    font-size: 3rem;
    margin-top: 30px;
    margin-bottom: -5px;
`

const Paragraph = Styled.p `
    color: white;
    font-size: 1.2rem
    margin-right: 10px
  
    
   
`

const ArticleContainer = Styled.div `
    background-color: #ECF9FE;
    height: 100%
    margin: 0px 0px 0px 30px
    width: 809px



`
const BigBoxContainer = Styled.div `
    height: 670px
    margin: 0px 30px 0px 0px
    background-color: #212936
    width: 285px

    
`

const ImgContainer1 = Styled.img `
    width: 501px;
    height: 334.04px;    
`

const HeaderContainers1 = Styled.h1 `
    text-align: left
`

const TextContainers = Styled.p `
    text-align:left
    margin-right:50px

`
const BoxHeader = Styled.h2 `

width: 305px;
height: 30px;
left: 1071px;
top: 278px;

font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 30px;



color: #FECA3B;

`

const BoxPara = Styled.p `
width: 280px;
height: 88px;
left: 900px;
top: 318px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;

color: #FECA3B;
`

const AnchorBox = Styled.a`
width: 305px;
height: 22px;
left: 800px;
top: 416px;

font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;



color: #FECA3B;

`


export default function SecondArticle(){
    return(
        <div style ={{width: '100%'}}>
            <TitleContainer>
                    <Title>Tutorial: Choosing a VR Framework</Title>
                    <Paragraph>Resources > <span style ={{textDecoration: 'underline' }}>Tutorial: Choosing a VR Framework</span></Paragraph>

            </TitleContainer>
            
            <div style ={{display:'flex'}}>
                <ArticleContainer>
                    <HeaderContainers1>Lorem ipsum dolor sit.</HeaderContainers1>
                    <TextContainers>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</TextContainers>
                    <ImgContainer1 src ={article2} alt = "VR Things" />
                    <HeaderContainers1>Lorem ipsum dolor sit.</HeaderContainers1>
                    <TextContainers>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</TextContainers>
                    <TextContainers>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</TextContainers>
                    <HeaderContainers1>Lorem ipsum dolor sit. </HeaderContainers1>
                    <TextContainers>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</TextContainers>
                    <HeaderContainers1>Lorem ipsum dolor sit. </HeaderContainers1>
                    <TextContainers>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</TextContainers>
                    <ImgContainer1 src ={article22} alt ="VR Things" />
                    <HeaderContainers1>Lorem ipsum dolor sit. </HeaderContainers1>
                    <TextContainers>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</TextContainers>

                </ArticleContainer>

                <BigBoxContainer>
                    <BoxHeader>Related Resources:</BoxHeader>
                    <BoxPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BoxPara>
                    <AnchorBox href = 'https://google.com'>www.google.com </AnchorBox>
                </BigBoxContainer>
                
                
            </div>
            
        </div>
    )
    
}