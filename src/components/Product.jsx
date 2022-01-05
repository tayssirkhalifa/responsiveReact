import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FavoriteBorderOutlined, HearingOutlined, HeartBrokenOutlined, SearchOutlined } from '@mui/icons-material';


const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:250px;
display:flex;
align-items: center;
justify-content: center;
     background-color: #f7fafc;
     position:relative;

`
const Image =styled.img`

width:240px;
height:220px;
z-index:2;
display:flex;
align-items: center;
justify-content: center;
`
const Circle=styled.div`
width:250px;
height:250px;
border-radius:50%;
 background-color: white;
position:absolute;
`
const Info =styled.div`
opacity:0;
transition:all 0.5s ease ;
cursor:pointer;
&:hover{
    opacity:1;
}
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items: center;
justify-content: center;






`
const Icon =styled.div`
height:40px;
width:40px;
border-radius:50%;
 background-color: white;
display:flex;
align-items: center;
justify-content: center;
margin:10px;
transition:all 0.5s ease ;
&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
`
const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartIcon/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>

                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>

            
        
    )
}

export default Product
