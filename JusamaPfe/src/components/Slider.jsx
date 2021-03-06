import React from 'react'
import styled from 'styled-components'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../data';
import { useState } from 'react';
import './Stylebutton.css';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container= styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display:"none"})}
    `
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.75;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex* -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 80%;
`
const Image = styled.img`
    height: 80%;
    
` 
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    background-color: transparent;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = () => {

  return (
      
      <div>
        <button className ='custom-btn btn-3'>BUY NOW !</button>
      </div>

    )
  }
const Slider = () => {
      const [slideIndex, setSlideIndex] = useState(0);

      const handleClick = (direction) =>{
        if (direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
      } 
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowBackIosOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
         <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Link to={`/products/${item.cat}`}>
            <Button>SHOP NOW</Button>
            </Link>
          </InfoContainer>
         </Slide>
         ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
          <ArrowForwardIosOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider