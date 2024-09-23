import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

function CheckoutForm({ price, createCalendarEvent }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://event-board-psi.vercel.app/participant/success",
      },
    });
    if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log("here");
      setErrorMessage(null);
      createCalendarEvent();
    } else if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    }
    // else {
    //   alert("Success");
    //   setErrorMessage(null);
    // Your customer will be redirected to your `return_url`. For some payment
    // methods like iDEAL, your customer will be redirected to an intermediate
    // site first to authorize the payment, then redirected to the `return_url`.
    // }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="paymentform">
        <p className="price-reminder">
          To secure your spot at the event, please complete a payment of: £
          <strong>{price}</strong>
        </p>
        <PaymentElement />
        <button disabled={!stripe}>Submit</button>
        {errorMessage && <div className="payment-error">{errorMessage}</div>}
      </form>
    </>
  );
}

export default CheckoutForm;
