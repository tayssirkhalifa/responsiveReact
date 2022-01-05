import { Email, Facebook, Instagram, Phone, Pinterest, Room, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"


const Container=styled.div`
display:flex;
 ${mobile({ flexDirection: "column" })}
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`
const Center=styled.div`
flex:1;
padding:20px;
${mobile({ display: "none" })}
`
const Rigth=styled.div`
padding:20px;
flex:1;
`

const Title=styled.h3`
margin-Bottom:30px;
`
const List=styled.ul`
margin:0;
padding:0;
display: flex;
flex-wrap:wrap;
list-style:none;
font-weight: bolder;
`
const ListItem=styled.li`
width:50%;
margin-bottom:10px;
`


const Logo=styled.h1``
const Descr=styled.p`
margin:20px 0px;
`
const SocialIcon=styled.div`
width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const SocialContainer=styled.div`
display:flex;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>

                <Logo>TAYSSIR.</Logo>
                <Descr>
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown printer took a galley 
                     of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                     
                </Descr>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>

                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Rigth>

<Title>Contact</Title>
<ContactItem>

   <Phone style={{marginRight:"10px"}}/> +216 52 505031
</ContactItem>
<ContactItem>

   <Room style={{marginRight:"10px"}}/> 18 nahj lward chara3 ezzouhour 
</ContactItem>

<ContactItem>

  <Email style={{marginRight:"10px"}}/> Contact@tayssir.com
</ContactItem>
 <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Rigth>
        </Container>
    )
}

export default Footer
