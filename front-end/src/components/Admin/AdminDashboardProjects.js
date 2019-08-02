import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Styled from "styled-components";
import axios from "axios";

// import { changeUserRole, deleteUser } from '../../actions/index';


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
        maxWidth: "720px",
        height: "700px",
        marginLeft: "30px",
        marginBottom: "30px",
        overflow: "scroll",
        padding: "0 20px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center"
    },

    rootBigBoxInside: {
        backgroundColor: "#1D2939",
        maxWidth: "720px",
        height: "700px",
        marginBottom: "30px",
        padding: "0 20px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center"
    },

    cardDiv: {
        display: "flex",
        width: "140px",
        flexFlow: "column wrap",
        justifyContent: "space-evenly",
        alignItems:"center",
        margin: "30px 30px 30px 30px",
        backgroundColor: "#2d4059",
        padding: "10px",
        color: "#c5cad1"

        
    },

    userImage: {
        width: "100px",
        borderRadius: "50%",
    },

    heading: {
        marginBottom: "-10px"
    },

    titleDiv: {
        width: "100px",
        justifyContent: "center",
        display: "flex",
        color: "#c5cad1",
        fontSize: "2rem",
        border: "2px solid #c5cad1"
    }

})

export default function AdminDashboardProjects(){
    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        axios
            .get("../usersData.json")
            .then(response => {
                setUserInfo(response.data.dataOne)
            })
    }, [])


    const classes = boxDiv()
    return(
        <div>
        <div>
             <TitleContainer>
                <Title>Admin Dashboard</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

            </TitleContainer>
            
            <div className = {classes.rootBigBox}>
            <h2 className = {classes.titleDiv} >Users</h2>
            <div className = {classes.rootBigBoxInside} >
           
                {Object.values(userInfo).map((user, index) => {
                    return (
                        <div className = {classes.cardDiv} key = {index}>
                            <h2 className = {classes.heading}>{user.fName}</h2>
                            <h2>{user.lName}</h2>
                            <p>{user.username}</p>
                            <img className = {classes.userImage} alt = "userImage" src ={user.image} />
                        </div>
                    )
                })}
            </div>
            </div>
         </div>  
        </div>
    )
}