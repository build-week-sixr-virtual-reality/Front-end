import React from 'react';
import Styled from "styled-components";

import LeftNav from "./leftnav.js";



const Background = Styled.div `
    background-color: #3c4c62;
`



export default function Dashboard(){
    return(
        <Background>
            <LeftNav />
        </Background>
    )
}