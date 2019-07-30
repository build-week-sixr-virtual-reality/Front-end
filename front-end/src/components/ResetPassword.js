import React, {useState} from "react";
// import { Link } from "react-router-dom";
import Styled from "styled-components";


const Container = Styled.div `
    display: flex;
    justify-content: space-evenly;
`

const InnerContainerPicture = Styled.div `
    width: 50%;
    height: 100%;
    min-height: 100vh;
   
  
`

const InnerContainerText = Styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
    background-color: #415269;
    height: 100%;
    min-height: 100vh;
  
`

const Image = Styled.img `
    width: 100%;
    min-height: 100vh;
    height: 100%;
  
`

const H2 = Styled.h2 `
    font-size: 2.6rem;
    color: #febf10;
    fontFamily: "open-sans";
`;

const FormDiv = Styled.div `
    width: 250px;
    height: 100%;
   
`

const Line = Styled.hr `
    width: 30px;
    height: 2px;
    border: none;
    background: linear-gradient(to right, #ee785e, #a255ef);;
    margin: 0 auto auto 0;
    
    
`

const Form = Styled.form `
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-evenly;
`

const Paragraph = Styled.p `
    font-size: .6rem;
    margin: 30px auto 5px 0;
    color: white;
    fontFamily: "open-sans";
`
const Input = Styled.input `
    height: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    border: none;
    fontFamily: "open-sans";
    

`

const Button = Styled.button `
    padding: 10px 5px 10px 10px;
    text-align: center;
    border-radius: 5px;
    padding-left: 80px;
    fontFamily: "open-sans";
    background: linear-gradient(to right, #ee785e, #a255ef);
    color: white;
    border: none;
    font-size: 10px;
    // text-transform: uppercase;
    
   
    
`

const Span = Styled.span `
    padding-left: 70px;
    font-size: 1rem;
    fontFamily: "open-sans";
    
    

`


function ResetPassword () {

    const [reset, setReset] = useState({ email: ""});

    const handleChange = event => {
        setReset({...reset, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    console.log(reset);

    return (
        <Container>
            <InnerContainerPicture>
                <Image alt ="vr" src ="https://images.unsplash.com/photo-1563192176-46820b40a0ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"/>
            </InnerContainerPicture>
            <InnerContainerText>
                <FormDiv>
                <H2>Reset Your Password</H2>
                <Line />
                <Form onSubmit ={handleSubmit}>
                    <Paragraph>Email Address</Paragraph>
                    <Input type= "email" name = "email" placeholder ="     hello@sixr.tv" value = {reset.email} onChange = {handleChange}></Input>
                    <Button type= "Submit">Reset Password<Span>></Span></Button>
                </Form>
                </FormDiv>
            </InnerContainerText>
        </Container>
    )
}

export default ResetPassword;