import React from 'react'
import {makeStyles} from '@material-ui/core/styles'


const miniBoxDiv = makeStyles({
    rootLittleBox:{
        color: 'black',
        width: '156px',
        height: '156px',
        marginRight: '20px'
    }
})
export default function DashBoardBoxes (){
    const classes = miniBoxDiv()
    return(
        <div>
            <div className = {classes.rootLittleBox} >

            </div>

            <div className = {classes.rootLittleBox}>
                
            </div>

            <div className = {classes.rootLittleBox}>
                
            </div>

            <div className = {classes.rootLittleBox}>
                
            </div>
        </div>
    )
}