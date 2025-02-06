import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: totalPrice })
    .then(res => {
      console.log(res.data.clientSecret);
    })
  }, [totalPrice, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("Payment failed:", error);
      setError(error.message);
    } else {
      console.log("Payment successful", paymentMethod);
      setError("");
    }
  };

  return (
    // <div className="bg-white p-10">
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#A1A1A1",
              "::placeholder": {
                color: "#A1A1A1",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-xl font-medium text-red-600 text-center">{error}</p>

      <div className="flex justify-center">
        <button
          className="btn btn-primary mt-10 w-1/2 text-xl"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
    </form>
    // </div>
  );
};

export default CheckoutForm;
