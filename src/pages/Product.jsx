
import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'


const Container = styled.div`
`
const Wrapper = styled.div`
 padding: 20px;
  
   display: flex;
`
const ImageContainer = styled.div`
flex:1;
`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`
const Title = styled.h1`
font-weight:200;
`
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
`
const Desc = styled.p`
margin-bottom: 20px ;
margin-top:20px;

`



const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterContainer = styled.div`
display: flex;
margin-top:20px;
`;

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
margin-right:5px;
margin-left:5px;
cursor:pointer;

`;

const FilterSize = styled.select`
`;

const FilterSizeOption = styled.option``;

const Price = styled.span`
font-weight:100;
font-size:40px;
`


const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items: center;
  justify-content: center;
  margin : 0px 5px ;
`;

const Button = styled.button`
  padding : 15px ;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
    font-weight: 1000;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const AddContainer = styled.div`
width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:20px;
`;

const AmountContainer = styled.div`
display: flex;
  align-items: center;
  font-weight: 70px;
`;
const Product = () => {
    return (
        <div>
            <Container>
                <Navbar />
                <Announcements />
                <Wrapper>
                    <ImageContainer>
                        <Image src="https://i.ibb.co/sp4XG4c/gceOz9.webp" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Classse A</Title>
                        <Desc>Originally manufactured as a five-door
                            hatchback in 1997, the second generation W169 introduced
                            a three-door hatchback. Having grown by 68 cm (27 in) since
                            the original model, the 2012
                            third generation A-class was longer than the first-generation B-class. </Desc>
                        <Price>100£</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black" />
                                <FilterColor color="darkblue" />
                                <FilterColor color="gray" />
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove/>
                                <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                            <Button>ADD</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <NewsLetter />
                <Footer />
            </Container>
        </div>
    )
}

export default Product
