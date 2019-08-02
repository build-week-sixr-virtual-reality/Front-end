import React from 'react'

import {makeStyles} from '@material-ui/core/styles'


const miniBoxDiv = makeStyles({
    rootBigBox:{
        backgroundColor: '#2D4059',
        height:'450px',
        width:'68%',
        margin: '30px',
        borderRadius: '10px',
        textAlign: "left",
        padding: "20px 30px 20px 30px",
        overflow: "scroll",
    },
    descriptionTitles: {
        fontSize: "1rem",
        color: "#c5cad1",
        textDecoration: "underline",

    },
    projectInfo: {
        backgroundColor: "#1c2839",
        padding: "20px",
        margin: "10px",
        color: "#c5cad1",
    }
})
export default function DashBoardBigBo ({box}){
    const classes = miniBoxDiv()

    

    return(
       
        <div>
            
                <div className ={classes.rootBigBox}>

                    <p className = {classes.descriptionTitles}>Title</p>
                    <h2 className = {classes.projectInfo}>{box.title}</h2>
                    <p className = {classes.descriptionTitles}>Description</p>
                    <p className = {classes.projectInfo}>{box.description}</p>
                    <p className = {classes.descriptionTitles}>Why?</p>
                    <p className = {classes.projectInfo}>{box.why}</p>
                    <p className = {classes.descriptionTitles}>Impact</p>
                    <p className = {classes.projectInfo}>{box.impact}</p>
                    <p className = {classes.descriptionTitles}>Funding Amount</p>
                    <p className = {classes.projectInfo}>{box.amount}</p>
                    
                 </div>
        </div>
     
    )
}