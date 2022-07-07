import React from 'react'
import './PopularStyle.css'
import styled from "styled-components";
import { Link } from 'react-router-dom';



const Container = styled.div`
display: flex;
padding: 5px;
justify-content: space-between;

`


const Popular = () => {

return (

  <Container>
    <div class="container">
   <div class ="body" >
<div class="card">
    <div class="circle"></div>
    <div class="content">
        <h2> Soccer Wear 11 </h2>
        <p>Available in many colors! </p>
           <p> Customizable! </p>

    <Link to="/product/6261c2e5574a4bad3a4fd420">
      <button>55$</button>
    </Link>

    </div>

    <img src = "https://media.discordapp.net/attachments/949225833950740580/962752543421780088/Best-Grade-Custom-Good-Quality-2019-2020-1-removebg-preview.png?width=473&height=473" />
    </div>
   </div>
   </div>
   <div class="container">
   <div class ="body" >
<div class="card">
    <div class="circle"></div>
    <div class="content">
        <h2> Soccer Wear 3 </h2>
        <p>Available in many colors!</p>
           <p> Customizable! </p>
    <Link to="/product/6261bee9574a4bad3a4fd408">
      <button>55$</button>
    </Link>
    </div>

    <img src = "https://cdn.discordapp.com/attachments/949225833950740580/949330141409054790/Latest-Best-Soccer-Jersey-Design-2019-Wholesale-1-2-removebg-preview.png" />
    </div>
   </div>
   </div>
   <div class="container">
   <div class ="body" >
<div class="card">
    <div class="circle"></div>
    <div class="content">
        <h2> Soccer wear 6</h2>
        <p>Available in many colors! </p>
           <p> Customizable! </p>

    <Link to="/product/6261c111574a4bad3a4fd410">
      <button>55$</button>
    </Link>

    </div>

    <img src = "https://media.discordapp.net/attachments/949225833950740580/977525837484138496/soccer_wear_6.png?width=468&height=468" />
    </div>
   </div>
   </div>

   </Container>
  )
}
export default Popular