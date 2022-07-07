import  {AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from '@mui/icons-material/'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Announcment from '../components/Announcment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import StripeCheckout from "react-stripe-checkout";
import {userRequest} from "../requestMethods"
import { Link, useHistory } from "react-router-dom";
import Menu from '../components/Menu';

const KEY = process.env.REACT_APP_STRIPE;



const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding :"10px"})} 
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props)=>
    props.type === "filled" ? "black" : "transparent"} ;
    color: ${(props) => props.type === "filled" && "white"};
    
`
const TopTexts = styled.div`
${mobile({ display: "none"})} 
`
const TopText = styled.span`
    text-decoration: underline ;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"})} 
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column"})} 
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 150px;
`
const Details = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column ;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50% ;
    background-color: ${props=>props.color} ;
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})} 
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;  
    ${mobile({ marginBottom: "20px"})} 
`
const Hr = styled.hr`
    background-color: #eee ;
    border:none;
    height: 1.5px;
`
const Summary = styled.div`
    flex:1;
    border:05px solid lightgray;
    border-radius: 10px ;
    padding: 20px;   
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px ;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
    ` 
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black ;
    color: white;
    font-weight: 600;
    cursor: pointer;
    
`
const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const [stripeToken,setStripeToken] = useState(null)
    
    
    
    const history = useHistory()

    const onToken = (token)=>{
       setStripeToken(token);
    };

    useEffect(()=>{
        const makeRequest = async () =>{
            try{
               const res = await userRequest.post("/checkout/payment",{
                   tokenId:stripeToken.id,
                   amount: cart.total *100,
                   
               });
               history.push("/success", {
                stripeData: res.data,   
                products: cart,});
            }catch{}
        };
        stripeToken && cart.total>=1 &&  makeRequest();
    },[stripeToken, cart.total, history]);

    
  return (
    <Container>
        <Navbar/>
        <Menu/>
        <Announcment/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Link to="/">
                <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>
                <TopButton type="filled">CLEAR CART</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product=>(
                    <Product>
                        <ProductDetail>
                            <Image src={product.img}/>
                        <Details>
                            <ProductName><b>Product:</b>{product.title}</ProductName>
                            <ProductId><b>ID:</b> {product._id}</ProductId>
                            <ProductColor color={product.color}/>
                            <ProductSize><b>Size:</b> {product.size} </ProductSize>
                        </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddCircleOutlineOutlined />
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <RemoveCircleOutlineOutlined/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ {product.price*product.quantity}
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>$ 6.5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>$ -6.5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                     <SummaryItemText>Total</SummaryItemText>
                     <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                      name="Jusama Shop"
                      image="https://cdn.discordapp.com/attachments/949225833950740580/954074057542864896/logo-1-150x150.png"
                      billingAddress
                      shippingAddress
                      description={`Your total is $${cart.total}`}
                      amount={cart.total*100}
                      token={onToken}
                      stripeKey={KEY}
                    >
                    <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>
                </Summary>
         </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart