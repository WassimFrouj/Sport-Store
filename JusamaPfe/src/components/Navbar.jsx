import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {NavDropdown,Nav} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import './Style.css'



const Container = styled.div`
    height: 60px; 
    //position: sticky;
    //top: 0;
    //background-color: #fff;
    
    ${mobile({ height :"50px"})} 
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items : center;
    justify-content: space-between;
    ${mobile({ padding :"11px 0px"})}
`

const Left = styled.div` 
    flex: 1; 
    display: flex;
    align-items : center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display:"none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
    margin-left: 25px;
    padding: 5px;
     
     
   
`
const Input = styled.input`
    border: none;
    ${mobile({ width :"50px"})}
`

const Center = styled.div`  
    flex: 1; 
    text-align: center; 
    ${mobile({ marginLeft: "30px"})} 
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize :"18px"})}
`   

const Right= styled.div`    
    flex: 1; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:2 , justifycontent :"center"})}
` 
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize :"12px", marginLeft:"10px"})}
`
const Select = styled.select`
   padding: 5px;
   margin-right: 10px;
   background-color: white;
   border-style: none ;
   padding-bottom: 10px;
  
`
const Option = styled.option`

`


const Navbar = () => {
   const quantity = useSelector(state=>state.cart.quantity)
   const user = useSelector(state => state.user.currentUser)
   function up(){
    window.location.href = '/profile';

   }

   
const history = useHistory()
   function logOut(){
      localStorage.removeItem('persist:root') 
      window.location.href = '/';
   }
  
  return (
      <Container>
          
        <Wrapper>
            <Left>
                <Language>
                <Select>
              <Option selected>EN</Option>
              <Option>AR</Option>
              <Option>SE</Option>
              <Option>FR</Option>
              
          </Select>
                </Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <SearchIcon style={{color:"gray", fontSize:16 }}/>
                </SearchContainer>
            </Left>
              
            <Center>
                <Link to="/" style={{ textDecoration: 'none' ,color: 'inherit' }}>
                <Logo>
                    SportDrip.
                </Logo>
                </Link>
            </Center>
            <Right>
            {user===null?
                <Link to="/register" style={{ textDecoration: 'none' ,color: 'inherit' }}>
                <MenuItem>REGISTER</MenuItem>
                </Link>
                :null
                }
                {user===null?
                <Link to="/login" style={{ textDecoration: 'none' ,color: 'inherit' }}>
                <MenuItem>SIGN IN</MenuItem>
                </Link>
                :null
            }
                {user!==null?
                
                <NavDropdown title={user.username} id="nav-dropdown">
                <NavDropdown.Item onClick={up} id="nav-dropdownItem">
                    PROFILE
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logOut} id="nav-dropdownItem">
                    LOGOUT
                </NavDropdown.Item>
                
                </NavDropdown>
                
                
                :null
                }
                 {user!==null?
                <Link to="/cart"style={{ textDecoration: 'none' ,color: 'inherit' }}>
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon/>
                </Badge>
                </MenuItem>
                </Link>
                :null
            }
            </Right>
            
        </Wrapper>
        
      </Container>
      
  );
};

export default Navbar;