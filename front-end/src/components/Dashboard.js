import React from 'react';
import LeftNav from "./leftnav.js";
import { Route } from "react-router-dom"

import Styled from "styled-components";
import CalendarDate from './Calendar.js';
import ProjectFunding from "./projectFunding";

const Background = Styled.div `
    background-color: #3c4c62;
    
`

export default  function Dashboard(){
    return(
        <Background>
            {/* Add your component here */}
             <LeftNav />
            
            {/* <Route path = "/dashboard" component= {CalendarDate} />
            <Route path = "/project-funding" component = {ProjectFunding} /> */}
        </Background>
     
   ) }
