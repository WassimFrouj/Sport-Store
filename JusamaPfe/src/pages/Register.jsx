import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useState } from "react";
import { register } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
   
    url("https://public-files.gumroad.com/zs33l38410bcby4no5bu4bckm0tb");
 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
        
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({ width :"75%"})}

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap ;
`

const Input = styled.input`
    flex:1;
    min-width: 40% ;
    margin:20px 10px 0px 0px ;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px ;
`

const Button = styled.button`
    width: 40%;
    border: none ;
    padding: 15px 20px ;
    background-color: teal ;
    color: white ;
    cursor: pointer;
`
const Error = styled.span`
  color: red;
;
`


const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [firstname,setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState(['']);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);


    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch,{username,email,password,firstname,lastname,phonenumber});
    };

  return (
    <Container>
     <Wrapper>
         <Title>CREATE AN ACCOUNT</Title>
         <Form>


             <Input 
            placeholder="firstname"
            onChange={(e) => setFirstName(e.target.value)}
             />

             <Input 
              placeholder="lastname"
             onChange={(e) => setLastName(e.target.value)}
              />

             <Input 
             placeholder="Ex:23547145"
             onChange={(e) => setPhoneNumber(e.target.value)}
               />

             <Input placeholder="username"
               onChange={(e) => setUsername(e.target.value)}
             />

             <Input placeholder="email"
               onChange={(e) => setEmail(e.target.value)}
             />

             <Input 
             type="password" 
             placeholder="password"
             onChange={(e) => setPassword(e.target.value)}
             />

             <Agreement>
                 By creating an account , I consent to the processing
                 of my personal data in accordance with the <b>PRIVACY POLICY</b>
             </Agreement>
             <Button onClick={handleClick} disabled={isFetching}>Sign Up</Button>
             {error && <Error>Something went wrong...</Error>} 

         </Form>
     </Wrapper>
    </Container>
  )
}

export default Register
