import React from 'react';
import LeftNav from "./leftnav.js";
import NavBarDashboard from "./NavBarDashboard.js";


import Styled from "styled-components";


const Background = Styled.div `
    background-color: #3c4c62;
    font-family: open-sans
    
`

export default  function Dashboard(){
    return(
        <div>
        <NavBarDashboard />
        <Background>
            {/* Add your component here */}
             <LeftNav />
        </Background>
        </div>
   ) }
