import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
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
      console.log("Payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Payment error:", confirmError);
      // setError(confirmError.message);
    } else {
      console.log("Payment intent:", paymentIntent);
      // setError("");
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        // now save the payment in database
        const payment = {
          email: user?.email,
          amount: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // convert utc time use moment js
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payment", payment);
        // console.log(res.data);
        refetch();
        if (res.data.paymentResult.insertedId) {
          // show alert
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment is successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/payment-history");
        }
      }
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
      <p className="text-xl font-medium text-red-600 text-center mt-4">
        {error}
      </p>
      {transactionId && (
        <p className="text-xl font-medium text-green-600 text-center mt-4">
          {" "}
          Your Transaction Id : {transactionId}
        </p>
      )}

      <div className="flex justify-center">
        <button
          className="btn btn-primary mt-10 w-1/2 text-xl"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
    </form>
    // </div>
  );
};

export default CheckoutForm;
