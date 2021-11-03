import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100
    const publishableKey =process.env.REACT_APP_PUBLIC_KEY

    console.log("publishable key : ",publishableKey)
    console.log("typeof publishable key : ",typeof(publishableKey) )
    
    // https://new-crwn.herokuapp.com/payment
    // http://localhost:5000/payment

    const onToken = (token) => {
        axios({
            url: process.env.REACT_APP_AXIOS_BASEURL,
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            console.log("res : ",response)
            alert("Payment successful")
        })
        .catch(error => {
            console.log("Error : ",(error))
            alert("Payment failed, use the given test credit card")
        })
    } 

    return(
        <StripeCheckout
            label="pay now"
            name="CRWN Clothing ltd"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="PAY NOW!"
            token={onToken}
            currency="INR"
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton