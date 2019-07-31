import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


const calendarStyle = makeStyles({
    dateTime:{
        backgroundColor: '#212936',
        fontFamily: 'open-sans',
        color:'white',
        height: '384px',
        width: '368px'
    },
    box:{
        // marginTop: '40px',
        backgroundColor: '#212936',
        width: '368px',
        height: '256px'
    },

    calendarDiv: {
        display: "flex",
        margin: "0",
        top: "0"
    }

   

})



export default function CalendarDate(){
    const [date,setDate] = useState({
        day: new Date()
    })

    const classes = calendarStyle()
    const modifiers = {
        
        dayPick: {}
    };

    const modifiersStyles = {
        days:{
            color: 'white'
            
        }
    }

    
    // onChange event
    const handleChange = date =>{
        setDate({date})

    }
    return(
        <calendarDiv>
            <calendarDiv>
                {/* Calendar */}
            <DayPicker className = {classes.dateTime}
                onChange={handleChange}
                value={date.day}
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
            
             />
            </calendarDiv>
           

            <div className = {classes.box}>
            {/* empty div block */}
               
            </div>

            
        </calendarDiv>
    )
}