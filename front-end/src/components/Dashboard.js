import React from 'react';
import LeftNav from "./leftnav.js";
import { Route } from "react-router-dom"

import Styled from "styled-components";
import CalendarDate from './Calendar.js';

const Background = Styled.div `
    background-color: #3c4c62;
    margin: 0;
`

export default  function Dashboard(){
    return(
        <Background>
            {/* Add your component here */}
             <LeftNav />
            <Route path = "/dashboard" component= {CalendarDate}></Route>
            
        </Background>
     
   ) }
