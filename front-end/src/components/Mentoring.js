import React from "react";
import Styled from "styled-components";
import {useDispatch} from "react-redux";
import { enableMentor, getMentors } from '../actions/index';

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

const MentorDiv = Styled.div `
    margin: 30px;
    display: flex;
    flex-direction: column;
`

const MentorSection = Styled.div  `
    padding: 20px 30px 20px 70px;
    display: flex;
    flex-direction: row;
    height: 150px;
    max-width: 720px;
    background-color: #1d2939;
    align-items: center;
    
`

const Image = Styled.img `
    border-radius: 50%;
    width: 112px;
    height: 112px;
    object-fit: cover;
`

const TextDiv = Styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 30px 0 60px;
    text-align: left;
`

const MentorName = Styled.p `
    color: #e7ae0f;
    margin-bottom: 0;
    font-weight: bold;
    
`

const MentorJob = Styled.p `
    color: #8c96a4;
    margin-top: 10px;
`

const MentorButton = Styled.button `
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

function Mentoring () {

    const dispatch = useDispatch();
    return (
        <div>
      
        <div>
           <TitleContainer>
                <Title>Find a Mentor</Title>
                <Paragraph>We have a range of industry experts and mentors available for 1-on-1 sessions, where you can discuss anything from project managment to niche, technical hurdles. Browse through the available mentors below to find a match for you and your project.</Paragraph>

            </TitleContainer>

            <MentorDiv>
                <MentorButton>Add As Mentor</MentorButton>
                <div>
                    <MentorSection>
                        <Image alt = "stock-pic" src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                        <TextDiv>
                            <MentorName>Insert Mentor's Name</MentorName>
                            <MentorJob>Position at Location</MentorJob>
                        </TextDiv>
                    </MentorSection>
                </div>
            </MentorDiv>
            <MentorDiv>
                <div>
                    <MentorSection>
                        <Image alt = "stock-pic" src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                        <TextDiv>
                            <MentorName>Insert Mentor's Name</MentorName>
                            <MentorJob>Position at Location</MentorJob>
                        </TextDiv>
                    </MentorSection>
                </div>
            </MentorDiv>
            <MentorDiv>
                <div>
                    <MentorSection>
                        <Image alt = "stock-pic" src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                        <TextDiv>
                            <MentorName>Insert Mentor's Name</MentorName>
                            <MentorJob>Position at Location</MentorJob>
                        </TextDiv>
                    </MentorSection>
                </div>
            </MentorDiv>

        </div>
        </div>
    )

}

export default Mentoring;