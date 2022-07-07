import React from 'react'
import './Style.css'

const Bar = () => {
  return (
    <div class="features">
        <div class="feature">
            <img src="https://cdn.discordapp.com/attachments/455018946136113152/966894646791917588/shipping.png" alt="" class="featureIcon"/>
            <span class="featureTitle">FREE SHIPPING</span>
            <span class="featureDesc">Free worldwide shipping on all orders.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="https://media.discordapp.net/attachments/455018946136113152/966894646506709002/return.png?width=473&height=473" alt=""/>
            <span class="featureTitle">30 DAYS RETURN</span>
            <span class="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="https://cdn.discordapp.com/attachments/455018946136113152/966894646217306132/gift.png" alt=""/>
            <span class="featureTitle">GIFT CARDS</span>
            <span class="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src="https://cdn.discordapp.com/attachments/455018946136113152/966894645852393512/contact.png" alt=""/>
            <span class="featureTitle">CONTACT US!</span>
            <span class="featureDesc">Keep in touch via email and support system.</span>
        </div>
    </div>
  )
}

export default Bar