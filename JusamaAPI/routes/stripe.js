const router = require("express").Router();
const stripe = require("stripe")("sk_test_51KeL4zA0e628k9iE2sRvrhzl32JNiTbDnxnZTqOVkSimHVfzMvUn83MHtVQiXInQdjFgmucwftng7DabMWDcbLfl00Y1uosr5w");



router.post("/payment" , (req,res)=>{
    stripe.charges.create(
        {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, 
     (stripeErr , stripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    })
})


module.exports = router ;