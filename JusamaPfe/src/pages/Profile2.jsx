import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import './Profile2.css';
import imgProfile from '../images/juspro.jpg';
import avatarMale from "../images/male.png"
import vidBackground from "../images/vid.mp4"

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from 'styled-components';




const Error = styled.span`
  color: red;
  margin-right: 40%;
  font-size: small;
`;

const HeroSection = styled.section`
  height: 100vh;
  width: 101vh;
  
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  

`;


const HeroVideo = styled.video`
  
  margin-top: 100px;
 
  object-fit: contain;
  width: 205.4vh;
  height: 114vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;

`;


const Profile2 = () => {

    const user = useSelector((state) => state.user.currentUser)
    const id = useSelector((state)=>state.user.currentUser._id)
    const TOKEN = useSelector((state)=>state.user.currentUser.accessToken)
   
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname,setFirstname] = useState("");
     const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
   
    const dispatch = useDispatch();
    const {error, isFetching} = useSelector((state)=>state.user.currentUser)
    
   
   function update() {
     let item={lastname,firstname,username,email,password}
     console.warn("item",item)
     fetch(`http://localhost:5000/api/users/${id}`, {
       method:'PUT',
       headers:{
         'Accept':'application/json',
         'content-type':'application/json',
          token: `Bearer ${TOKEN}`,
       },
       body:JSON.stringify(item)
   
     }).then((result) => {
       result.json().then((resp) => {
         console.warn(resp)
       })
     })
   
   }
   
   
   function deletee() {
     let item={firstname,lastname,username,email,password}
     console.warn("item",item)
     fetch(`http://localhost:5000/api/users/${id}`, {
       method:'DELETE',
       headers:{
         'Accept':'application/json',
         'content-type':'application/json',
          token:` Bearer ${TOKEN}`,
       },
       body:JSON.stringify(item)
   
     }).then((result) => {
       result.json().then((resp) => {
         console.warn(resp)
       })
     })
   
   }
   
   
   
    const handleClick = (e) => {
    e.preventDefault();
    update(dispatch, {firstname,lastname,username,email,password});
    localStorage.clear('persist:root')
    window.location.href='/login'
    };
   
    const handleClick2 = (e) => {
     e.preventDefault();
     deletee(dispatch, {firstname,lastname,username,email,password});
     localStorage.clear('persist:root')
     window.location.href='/login'
     };
  

  return (

    <>
      <Navbar />
      <Menu/>
      <HeroSection>
      <HeroVideo src={vidBackground} autoPlay muted loop />
      <div className='groupContainer'>
        <div className="container">
          <div className="wrapper">
            <img src={imgProfile} alt="" />
            <div className="content">
              <img src={avatarMale} alt="" />
              <h2>{user.username} <span>25</span></h2>
              <p>Tunisia</p>
              <div className="footer">
                <div>
                  <p className="num">8</p>
                  <p>Ordered Products</p>
                </div>
                <div>
                  <p className="num">80</p>
                  <p>Likes</p>
                </div>
                <div>
                  <p className="num">15K</p>
                  <p>Wish List</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">

          <form className="newUserForm">

            <div className="newUserItem">
              <label>Username</label>
              <input type="text" placeholder={user.username}
                
                required={true}
                onChange={(e) => setUsername(e.target.value)}

              />
               {error && <Error>Username is required</Error>} 
            </div>

            <div className="newUserItem">
              <label>First Name</label>
                  <input type="email" placeholder={user.firstname} required={true}
               onChange={(e) => setFirstname(e.target.value)}

/>
{error && <Error>Fisrt Name is required</Error>} 


 </div>
 <div className="newUserItem">
 <label>Last Name</label>
 <input type="lastname" placeholder={user.lastname} required={true}
onChange={(e) => setLastname(e.target.value)}

/>
{error && <Error>Last Name is required</Error>} 


 </div>


            <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder={user.email}
                required={true}
onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            {error && <Error>Email is required</Error>} 
            <div className="newUserItem">
              <label>Current Password</label>
              <input type="password" placeholder="Current Password" required
              
              />
              {error && <Error>Password is Required</Error>}
              
            </div>
            <div className="newUserItem">
              <label>New Password</label>
              <input type="password" placeholder="New Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
             
              />
              {error && <Error>Password is required</Error>} 
            </div>

            <button className="newUserButton" onClick={handleClick} disabled={isFetching}>Update Profile</button>
 <button className="newUserButton" onClick={handleClick2} disabled={isFetching}>Delete Profile</button>
            
            
          </form>

        </div>

      </div>
      
      </HeroSection>
     

    </>
);
}


export default Profile2