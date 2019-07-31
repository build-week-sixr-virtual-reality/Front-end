import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import DashBoardBoxes from './DashBoardBoxes'


const boxDiv = makeStyles({
    rootBigBox:{
        backgroundColor: "#1D2939",
        width: "720px",
        height: "484px"
    }
})

export default function DashBoardProjects(){
    const classes = boxDiv()
    return(
        <div>
            <DashBoardBoxes />
            <div className = {classes.rootBigBox}>
                 
            </div>
        </div>
    )
}