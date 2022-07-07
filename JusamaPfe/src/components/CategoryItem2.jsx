import React from 'react';
import './StyleCategory.css'
import styled from 'styled-components'
import { mobile } from '../responsive';
import {
 Link
  } from "react-router-dom";

const Image= styled.img`
    height: 60vh;
    width: 19.5vw;
    border-radius:3px;
    display: flex;
    
    
    
  ${mobile({ height:"70vh" })}
  ${mobile({ width:"85vw" })}
`

const CategoryItem2 = ({item}) => {
    return (
        <div>
            <div class="box-wrap">
               <div class="box">
                <Link to={`/products/${item.cat}`}>
                    <Image src={item.img}></Image>
                    </Link>
                    <p> {item.title} </p>
                </div>
                
                </div>
                
            
        </div>
    );
};

export default CategoryItem2;