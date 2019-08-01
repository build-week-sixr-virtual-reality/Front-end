import React from 'react'

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
export default function DashBoardBoxes (){
    const classes = miniBoxDiv()
    return(
        <div>
           
        <div>
            <div className ={classes.container}>
                <div className = {classes.rootLittleBox} >

                </div>

                <div className = {classes.rootLittleBox}>
                    
                </div>

                <div className = {classes.rootLittleBox}>
                    
                </div>

                <div className = {classes.rootLittleBox}>
                    
                </div>
            </div>
            <div>
                <div className ={classes.rootBigBox}>

                </div>
            </div>
        </div>
        </div>
    )
}