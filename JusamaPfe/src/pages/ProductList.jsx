import React, { useState } from 'react'
import styled from 'styled-components'
import Announcment from '../components/Announcment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from "../components/Products"
import { mobile } from '../responsive';
import {
  useLocation
} from "react-router-dom";
import Menu from '../components/Menu';
import FootballAnime from '../components/FootballAnime';
import BasketballAnime from '../components/BasketballAnime';
import TracksuitAnime from '../components/TracksuitAnime';
import GymAnime from '../components/GymAnime';
import PoloAnime from '../components/PoloAnime';



const Container = styled.div`


`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  display: flex ;
  ${mobile({ width: "0px 20px ", display: "flex" , flexDirection:"column"})}

` 
const FilterText = styled.div`
  font-size: 20px ;
  font-weight: 550;
  margin-right: 20px;
  ${mobile({ magrinRight :"0px"})}
  `
const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
  background-color: white;
  border-style: none ;
  ${mobile({ magrin :"10px 0px"})}
  
  
`
const Option = styled.option`
 
`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filters,setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    })
  }

  console.log(filters)
  return (
    <Container>
        <Navbar/>
        <Menu/>
        <Announcment/>
        {cat == 'football' ? 
            <FootballAnime/>
            : null }
            {cat == 'basketball' ? 
            <BasketballAnime/>
            : null }
            {cat == 'tracksuit' ? 
            <TracksuitAnime/>
            : null }
             {cat == 'gym' ? 
            <GymAnime />
            : null }
             {cat == 'polo' ? 
            <PoloAnime />
            : null }
        
        {/* <Title>{cat.toUpperCase()}</Title> */}
        <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText> 
          <Select name="color" onChange={handleFilters}>
            <Option  >
               Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
              <Option>Pink</Option>
              <Option>Purple</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option  >
               Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select onChange={(e) => setSort(e.target.value)}>
          <Option value="newest">Newest</Option>
          <Option value="asc">Price (asc)</Option>
          <Option value="desc">Price (desc)</Option>
        </Select>
        </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>

    </Container>
  )
}

export default ProductList