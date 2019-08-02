import React,{useState,useEffect} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Styled from "styled-components";
import {useDispatch} from "react-redux";
import { getProjects, deleteProject } from '../../actions/index';
import {Card} from 'semantic-ui-react'

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
    display:flex;
    flexDirection:row;
    
`

// const InnerDiv = Styled.div `
//     height: 48px;
//     margin: 10px;
//     padding: 0 10px 0 10px;
//     background-color: #405168;
//     display: flex;
//     justify-content: space-between;
// `

// const ProjectP = Styled.p `
//     margin: auto 10px auto 10px;
//     color: #c5cad1;
//     font-weight: bold;
// `

// const AddProjectButton = Styled.button `
//     display: flex;
//     justify-content: center;
//     margin: 10px 10px 20px 10px;
//     padding: 10px 10px;
//     width: 140px;
//     border-radius: 25px;
//     color: #405168;
//     background: linear-gradient(to right, #35c6f2, #a3d89b);
//     border: none;
//     font-weight: bold;
//     font-size: .6rem;
// `
// const Image = Styled.img `
//     margin-top: 5px;

// `

const cardStyles = {
    display: 'flex',
    flexDirection:'column',
    width: '200px',
    height: '400px',
    border: '10px groove yellow'
}

function AdminFunding () {

    const dispatch = useDispatch();
    const [projects,setProjects] = useState([])
    const [projects1,setProjects1] = useState([])
    const [projects2,setProjects2] = useState([])
   

    useEffect(() => {
        axios
            .get("../projectData.json")
            .then(response => {
                console.log(response.data)
                setProjects(response.data.dataOne)
                setProjects1(response.data.dataTwo)
                setProjects2(response.data.dataThree)
                
               
            
            })
    }, [])


    console.log(projects)
    return (
        <div>
        <div>
            
            {/* <Route path = "/project-funding/step2" component = {ProjectStep2}></Route> */}
            <TitleContainer>
                <Title>Project Funding</Title>
                <Paragraph>Are you looking for funding options for your next AR/VR/XR related project? Submit an application to SIXR for, you could be eligible to receive partial or full funding through our partners and investors.</Paragraph>

            </TitleContainer>
            <DivContainer>
                <div style ={{width: '30%', margin: '20px'}}>
                    {projects.map((item,index) => (
                        <Card style ={{backgroundColor:'#e7ae0f', borderRadius :'20px'}}   key ={index}
                            header=<h2>{item.title}</h2>
                            meta={item.amount}
                            description={item.description}
                            extra={item.impact}
                        />
                    ))}
                </div>

                <div style ={{width: '30%',margin: '20px'}}>
                    {projects1.map((item,index) => (
                        <Card style ={{backgroundColor:'#e7ae0f'}} key ={index}
                            header={item.title}
                            meta={item.amount}
                            description={item.description}
                            extra={item.impact}
                        />
                    ))}
                </div>
                <div style ={{width: '30%',margin: '20px'}}>
                    {projects2.map((item,index) => (
                        <Card style ={{backgroundColor:'#e7ae0f'}} key ={index}
                            header={item.title}
                            meta={item.amount}
                            description={item.description}
                            extra={item.impact}
                        />
                    ))}
                </div>
            </DivContainer>
        </div>
        </div>
    )
}

export default AdminFunding;