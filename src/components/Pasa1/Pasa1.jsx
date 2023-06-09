import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement} from '@stripe/react-stripe-js'

const stripePromise = loadStripe("pk_test_51NG6XgB439p1m1xwSpPezHZwMU1w00Eg2K7aK3qf92B9RoXHZcgIfmJfd8DDpjTOYNV7wfDkVGJkYAEN3zbQITU600cyjv6lC1")

const checkoutForm = () =>{
  return <form>
    <CardElement/>
  </form>
}

export const Pasa1 = () => {
  return (
    <Elements stripe={stripePromise}>
      <checkoutForm/>
    </Elements>
  )
}
