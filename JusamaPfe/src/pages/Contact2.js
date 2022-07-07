import React, { useState } from 'react'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'



import { Input,InputGroup, InputLeftElement, Textarea,Button  } from "@chakra-ui/react"
import {BsEnvelope, GiPositionMarker, HiOutlinePhone} from 'react-icons/all'
import './Contactuscss.css'
const Contact2 = () => {
    const [email, setemail] = useState('')
    const [body, setbody] = useState('')

    const handlesubmit = () =>{
        window.open(`mailto:wassimefrouj@gmail.com?subject=Sample&body=${body}`)
    }
    return (
        <>
        <Navbar/>
        <Menu/>
        <div className="contactUs">
           
        <div className="headerContact">
            
            <div className="text">
                <h2>Contact</h2>
            </div>

        </div>

        <div className="card-contact">
            <div className="sendMsg">
                <h4>Send Us A Message</h4>
                    <div className="inputContact">
                        <InputGroup width="450px" >
                            
                            <Input value = {email} onChange = {e=> setemail(e.target.value)} type="text" placeholder="Your Email Address"/>
                        </InputGroup>

                    </div>
                    <div className="textAreaCnt">
                        <Textarea value = {body} onChange = {e=> setbody(e.target.value)} width="450px"  placeholder="How Can We Help" height="200px" />
                    </div>
                    <div className="contentContact">
                        <Button onClick = {handlesubmit} borderRadius="90px" colorScheme="teal" variant="solid" size="180px" className="contactBtn">Submit</Button>
                    </div>

            </div>
            <div className="showAdrss">
                <div className="box">
                    <div className="iconCtn"><GiPositionMarker opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3> Address</h3>
                        <p>Jusama Svärmaregatan 3 60361 Norrköping, Sweden</p>
                    </div>
                </div>
                    <div className="box">
                    <div className="iconCtn"><HiOutlinePhone opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Lets Talk</h3>
                        <p className="infoCtn">(46) 736327465</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconCtn"><BsEnvelope opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Sale Support</h3>
                        <p className="infoCtn">info@jusama.se</p>
                    </div>
                </div>
            </div>
        </div>
</div>
</>
    )
}

export default Contact2