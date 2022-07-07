import styled from "styled-components"
import { mobile } from '../responsive';

const Container = styled.div`
height: 100px;
padding: 30px;
background-color: #ffffff;
color: #000000;
display: flex;
align-items: center;
justify-content: center;
font-size: 70px;
font-weight: 600;
flex-direction: column;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
${mobile({ display:"none"})}
`
const Button = styled.button`
padding: 4.5px 18.5px;
border: 1.5px solid transparent;
background-color: #000000;
color: white;
border-radius:30px;
justify-content: center;
align-items: center;
cursor: pointer;
font-size:20px;
`

const Announcment2 = () => {
  return (
    <Container>
      Where All Athletes Belong .
      <Button>
        HERE
      </Button>

    </Container>
  )
}

export default Announcment2