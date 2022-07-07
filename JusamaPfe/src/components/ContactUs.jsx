import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './ContactStyle.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';


const ContactUs = () => {
  return (
    <section id="contact">
        <h1 class="section-header">Contact</h1>
        <div class="contact-wrapper">
        <form id="contact-form" class="form-horizontal" role="form">
           <div class="form-group">
           <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name"  required/>
          </div>
         </div>

         <div class="form-group">
         <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email"  required></input>
         </div>
          </div>

          <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
         <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
          <div class="alt-send-button">
          <SendOutlinedIcon/>
          <span class="send-text">
              SEND
              </span>
          </div>
      
          </button>
          </form>

          <div class="direct-contact-container">
          <ul class="contact-list">
          <li class="list-item">
              
          <LocationOnOutlinedIcon/>
          
                  <span class="contact-text place">
                  Jusama Svärmaregatan 3 60361 Norrköping, Sweden
                      </span>
                      
                      </li>
          <li class="list-item"><LocalPhoneOutlinedIcon /><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(46) 736327465 </a></span></li>
          <li class="list-item"><EmailOutlinedIcon/><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">info@jusama.se</a></span></li>
          <li class="list-item">  
           <FacebookOutlinedIcon/>
            <span class="contact-text fb">@Jusama</span>                
          </li>
          <li class="list-item">  
           <InstagramIcon/>
            <span class="contact-text insta">@Jusama</span>                
          </li>
          </ul>
          
          

    </div>
    </div>
    </section> 
        
  )
}

export default ContactUs