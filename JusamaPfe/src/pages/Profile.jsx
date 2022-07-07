
import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import './Profile.css'
import imgProfile from '../images/juspro.jpg';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from 'styled-components';
import '../images/register.svg'
import avatarMale from "../images/male.png"
import vidBackground from "../images/vid.mp4"

const HeroVideo = styled.video`
  
  margin-top: 100px;
  object-fit: contain;
  width: 203.8vw;
  height: 114vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;


;
`
const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size:150px;
  width:500px;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  

;
`
const Error = styled.span`
  color: red;
;
`


const Profile = () => {

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
< Navbar />
< Menu />
<HeroSection> 
      <HeroVideo src={vidBackground} autoPlay muted />

<div className='groupContainer'>
 <div className="container">
 <div className="wrapper">
 <img src={imgProfile} alt="" />
 <div className="content">
 <img src={avatarMale } alt=""/>
 <h2>{user.username} <span>25</span></h2>
 <p>Tunisia</p>
 <div className="footer">
 <div>
 <p className="num">8</p>
 <p>Ordered Products</p>
 </div>
 <div>
   <p className="num">2</p>
<p>Likes</p>
 </div>
 <div>
 <p className="num">0</p>
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
 <input type="text" placeholder={user.username} required={true}
 onChange={(e) => setUsername(e.target.value)}
 />
 {error && <Error>Username is required</Error>} 
</div>

<div className="newUserItem">
 <label>First Name</label>
 <input type="email" placeholder={user.email} required={true}
onChange={(e) => setEmail(e.target.value)}

/>
{error && <Error>Email is required</Error>} 


 </div>

 <div className="newUserItem">
 <label>Last Name</label>
 <input type="lastname" placeholder={user.lastname} required={true}
onChange={(e) => setLastname(e.target.value)}

/>
{error && <Error>Last Name is required</Error>} 


 </div>


<div className="newUserItem">
 <label>First Name</label>
 <input type="firstname" placeholder={user.firstname} required={true}
onChange={(e) => setFirstname(e.target.value)}

/>
{error && <Error>First Name is required</Error>} 


 </div>
 <div className="newUserItem">
 <label>Password</label>
 <input type="password" placeholder="Old/New Password" required={true}
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

export default Profile