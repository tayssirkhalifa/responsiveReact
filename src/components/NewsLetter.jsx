import { Send } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import {mobile} from "../Responsive"

const Container=styled.div`
height:60vh;
 background-color: #fcf5f5;
 display:flex;
align-items: center;
justify-content: center;
flex-direction:column;
`
const Title=styled.h1`
font-size:70px;
margin-bottom:20px;
`
const Description=styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
 ${mobile({ textAlign: "center" })}


`
const InputContainer=styled.div`
width:50%;
height:40px;
 background-color: white;
 display:flex;
align-items: center;
justify-content: space-between;
border:1px solid lightgrey; 
${mobile({ width: "80%" })}

`
const Buttonn=styled.button`
flex:1;
height:100%;
width:100%;
border:none;
 background-color: teal;
 color:white;



`
const Input=styled.input`
height:100%;
width:100%;
border:none;
flex:8;
padding-left:20px;
`


const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get Timely update from your favourite cars</Description>
            <InputContainer>
            <Input placeholder="your email"/>
            <Buttonn>
                <Send/>
            </Buttonn>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
