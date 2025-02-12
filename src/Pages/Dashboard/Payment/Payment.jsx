import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import SslPayment from "./SslPayment";
// import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle subHeading="Please pay bill" heading="Payment" />
      <div>
        <Elements stripe={stripePromise}>
          {/* <CheckoutForm /> */}
          <SslPayment />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
