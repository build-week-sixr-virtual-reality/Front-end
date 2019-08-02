import React, {useState} from 'react'
import DashBoardBigBox from "./DashBoardBigBox.js";
import {makeStyles} from '@material-ui/core/styles'
import VRimage from "../assets/PlaceholderImage/vrdashboard.jpeg";


const miniBoxDiv = makeStyles({
    container:{
        display:'flex',
        flexDirection: 'row'
    },
    rootLittleBox:{
        backgroundColor: '#2D4059',
        width: '156px',
        height: '156px',
        margin: '30px',
        borderRadius: '10px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"

       
    },
    rootBigBox:{
        backgroundColor: '#2D4059',
        height:'450px',
        width:'68%',
        margin: '30px',
        borderRadius: '10px'
    },
    buttonChange: {
        width: "100px",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        padding: "5px 10px",
        borderRadius: "25px",
        color: "#405168",
        background: "linear-gradient(to right, #35c6f2, #a3d89b)",
        border: "none",
        fontWeight: "bold",
        fontSize: ".6rem",

    },

    header: {
        color: "#c5cad1"
    }
})
export default function DashBoardBoxes ({dashBoardProjects}){
    const classes = miniBoxDiv()

    const [box, setBox] = useState("https://images.unsplash.com/photo-1506031765313-0bc574a405f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80");

    // const handleBox = event => {
    //     setBox(event)
    // }

    console.log(box);
    return(
        <div>
           
        <div>
            <div className ={classes.container}>
                {dashBoardProjects.map(project => {
                 return( 
                 <div className = {classes.rootLittleBox} >
                    <h2 className = {classes.header}>{project.title}</h2>
                    <button className = {classes.buttonChange} onClick ={() => setBox(project) }>See Project</button>
                </div> 
                    ) 
                })}
                

                {/* <div className = {classes.rootLittleBox}>
                    
                </div>

                <div className = {classes.rootLittleBox}>
                    
                </div>

                <div className = {classes.rootLittleBox}>
                    
                </div> */}
            </div>
            <div>
                <DashBoardBigBox box ={box} />
            </div>
        </div>
        </div>
    )
}