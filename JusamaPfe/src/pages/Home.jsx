import React from 'react'
import Slider from '../components/Slider'
import Announcment2 from '../components/Announcment2'
import Popular from '../components/Popular'
import Annoucement3 from '../components/Annoucement3' 
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Pub from '../components/Pub'
import Bar from '../components/Bar'
import Test from '../components/Test'
import Menu from '../components/Menu'






const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Menu/>
      <Announcment/>
        <Slider />
        <Bar/>
        <Announcment2/>
        
        
        <Test/>
        
        <Pub/>
        <Annoucement3/>
        <Popular/>
        
        <Newsletter/>
        <Footer/>
        
    </div>
  )
}

export default Home