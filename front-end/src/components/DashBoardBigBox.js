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
        padding: "20px 30px 20px 30px"
    },
    descriptionTitles: {
        fontSize: "1rem",
        color: "#c5cad1",
        textDecoration: "underline",

    }
})
export default function DashBoardBigBo ({box}){
    const classes = miniBoxDiv()

    

    return(
       
        <div>
            
                <div className ={classes.rootBigBox}>
                    <p className = {classes.descriptionTitles}>Title</p>
                    <h2>{box.title}</h2>
                    <p className = {classes.descriptionTitles}>Description</p>
                    <p>{box.description}</p>
                    <p className = {classes.descriptionTitles}>Why?</p>
                    <p>{box.why}</p>
                    <p className = {classes.descriptionTitles}>Impact</p>
                    <p>{box.impact}</p>
                    <p className = {classes.descriptionTitles}>Funding Amount</p>
                    <p>{box.amount}</p>
                 </div>
        </div>
     
    )
}