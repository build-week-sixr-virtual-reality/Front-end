import React from 'react';
import LeftNav from "./leftnav.js";


import Styled from "styled-components";


const Background = Styled.div `
    background-color: #3c4c62;
    
`

export default  function Dashboard(){
    return(
        <Background>
            {/* Add your component here */}
             <LeftNav />
        </Background>
     
   ) }
