import React from 'react';
import AdminNav from "../AdminNav.js";
import NavBarDashboard from "../NavBarDashboard";


import Styled from "styled-components";


const Background = Styled.div `
    background-color: #3c4c62;
    font-family: open-sans
    
`

export default  function DashboardAdmin(){
    return(
        <div>
        <NavBarDashboard />
        <Background>
            {/* Add your component here */}
             <AdminNav />
        </Background>
        </div>
   ) }
