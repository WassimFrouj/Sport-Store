import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';



const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection :"column"})} 
    
   
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.img`
    width: 36%;
    height: 100%;
`
const Desc = styled.p`
    margin: 0px 0px ;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50% ;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display :"none"})} 

`
const Title= styled.h3`
    margin-bottom: 30px;
`
const List= styled.ul`
    margin: 0;
    padding: 0;
    list-style: none ;
    display: flex;
    flex-wrap: wrap ;
`
const ListItem= styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
    
`
const ContactItem= styled.div`
    margin-bottom: 7px;
    display: flex;
    align-items: center;
    
`
const ContactItem2= styled.div`
    margin-left: 32px;
    margin-bottom: 7px;
    
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo src="https://media.discordapp.net/attachments/949225833950740580/993457810480304150/GetPaidStock.com_-62c2b8e37eb57-removebg-preview.png?width=489&height=473"/>
            <Desc>Jusama is a Swedish brand created, from passion, with an utmost attention totrendy design, modern technologies and high-quality fabrics.</Desc>
            <SocialContainer>
                <a href="https://www.facebook.com/Jusama-103338071066414" style={{ textDecoration: 'none' ,color: 'inherit' }}>
                <SocialIcon>
                    <FacebookIcon/>
                </SocialIcon>
                </a>
                <a href="https://www.facebook.com/Jusama-103338071066414" style={{ textDecoration: 'none' ,color: 'inherit' }}>
                <SocialIcon>
                    <InstagramIcon/>
                </SocialIcon>
                </a>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Order status</ListItem>
                <ListItem>Contact us</ListItem>
                <ListItem>About us</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnIcon style={{marginRight:"10px"}}/>Address : Jusama Svärmaregatan 3 60361 Norrköping, Sweden </ContactItem>
            <ContactItem2>Adress 2 : 3 Ibn Al-Nafees Industrial Zone Khaireddine La Goulette, lac 3, 2015 Tunis, Tunisia</ContactItem2>
            <ContactItem><EmailIcon style={{marginRight:"10px"}}/>Email : info@jusama.se</ContactItem>
            <ContactItem><CallIcon style={{marginRight:"10px"}}/>Tel : 0046 736327465 / 00216 29 552 200 </ContactItem>
            
        </Right>

    </Container>
  )
}

export default Footer