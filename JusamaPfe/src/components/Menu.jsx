import React from 'react'
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
<nav id="nav">
    <div class="dropdown">
    <Link to="/" style={{ textDecoration: 'none' ,color: 'inherit' }}>
    <h3 class="menuItem">HOME</h3>
    </Link>
    <h3 class="btn menuItem dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        PRODUCTS
    </h3>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <Link to="/products/football" style={{ textDecoration: 'none' ,color: 'inherit' }}><li><a class="dropdown-item" href="#">FOOTBALL</a></li></Link>
    <Link to="/products/basketball" style={{ textDecoration: 'none' ,color: 'inherit' }}><li><a class="dropdown-item" href="#">BASKETBALL</a></li></Link>
    <Link to="/products/polo"style={{ textDecoration: 'none' ,color: 'inherit' }}><li><a class="dropdown-item" href="#">POLO</a></li></Link>
    <Link to="/products/tracksuit"style={{ textDecoration: 'none' ,color: 'inherit' }}><li><a class="dropdown-item" href="#">TRACKSUIT</a></li></Link>
    <Link to="/products/gym"style={{ textDecoration: 'none' ,color: 'inherit' }}><li><a class="dropdown-item" href="#">GYM</a></li></Link>
    </ul>
    
    <Link to="/about" style={{ textDecoration: 'none' ,color: 'inherit' }}> <h3 class="menuItem">ABOUT US</h3></Link>
    <Link to="/contact" style={{ textDecoration: 'none' ,color: 'inherit' }}> <h3 class="menuItem">CONTACT US</h3></Link>
    
</div>
</nav>
  )
}

export default Menu