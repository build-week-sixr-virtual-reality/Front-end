import React, {useState} from 'react'
import DashBoardBigBox from "./DashBoardBigBox.js";
import {makeStyles} from '@material-ui/core/styles'


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
        borderRadius: '10px'
       
    },
    rootBigBox:{
        backgroundColor: '#2D4059',
        height:'450px',
        width:'68%',
        margin: '30px',
        borderRadius: '10px'
    }
})
export default function DashBoardBoxes ({dashBoardProjects}){
    const classes = miniBoxDiv()

    const [box, setBox] = useState([]);

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
                    <h2>{project.title}</h2>
                    <button onClick ={() => setBox(project) }>See Info</button>
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