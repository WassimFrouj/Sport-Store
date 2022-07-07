import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem2 from './CategoryItem2'
import { mobile } from '../responsive';
import './StyleCategory.css'




const Categories2 = () => {
  return (
    <div>
        <div class="box-wrap">
            
      {categories.map(item=>(
      <CategoryItem2 item={item} key={item.id}/>    
      ))}
      </div>
    </div>
  )
}

export default Categories2