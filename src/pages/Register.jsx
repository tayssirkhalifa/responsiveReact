import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'



const Container = styled.div`

width:100wh;
height:100vh;
background : linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url("https://i.ibb.co/tCFZ2b0/tesla-model-s-15.jpg") center;
     background-size: cover;
  display: flex;
  align-items: center;
  justify-content: start;
 
`
const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
   background-color: white;
     opacity: 0.8;
      margin-left:30px;
       ${mobile({ width: "50%"  })}

`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Agreement = styled.span`
font-size:20px;

`
const Form = styled.form`
display: flex;
flex-wrapper:wrap;
flex-direction:column;

`
const Button = styled.button`

margin-left:90px;
margin-top:10px;
width:40%;
 background-color: teal;
  color: white;
  cursor: pointer;
`
const Input = styled.input`

flex:1;
min-width: 10%;
margin-bottom:20px;
margin-top:10px;

`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title> CREATE AN ACCOUNT </Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="Last name"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="password again"></Input>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
        
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>

            </Wrapper>
        </Container>
    )
}

export default Register
