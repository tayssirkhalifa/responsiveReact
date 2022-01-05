import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import { mobile } from '../Responsive'


const Container = styled.div`

`

const Title = styled.h1`
margin:20px;
`

const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`

const Select = styled.select`
padding :10px;
margin-right:20px;

`
const Option = styled.option`
`
const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Title>BMW</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Product

                        <Select>
                            <Option disabled selected>
                                Brand
                            </Option>
                            <Option>BMW</Option>
                            <Option>Mercedes</Option>
                            <Option>Audi</Option>
                            
                        </Select>
                        <Select>
                            <Option disabled selected>
                                Size
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </FilterText>
                </Filter>
                <Filter>
                    <FilterText>Sort Product</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList
