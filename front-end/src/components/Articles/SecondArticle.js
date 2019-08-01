import React from 'react'
import Styled from "styled-components";

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
    height: 670px
    margin: 0px 0px 0px 30px
    width: 809px



`
const BigBoxContainer = Styled.div `
    height: 670px
    margin: 0px 30px 0px 0px
    background-color: #212936
    width: 285px

    
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

                </ArticleContainer>
                
                <BigBoxContainer>

                </BigBoxContainer>
                
            </div>
        </div>
    )
    
}