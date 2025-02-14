// import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { useState } from "react";

const SslPayment = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const [email, setEmail] = useState("");

  const handleCreatePayment = async () => {
    // now save the payment in database
    const payment = {
      email: user?.email,
      amount: totalPrice,
      transactionId: "",
      date: new Date(), //  convert utc time use moment js
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuId),
      status: "pending",
    };

    const res = await axiosSecure.post("/create-ssl-payment", payment);
    
    refetch();
    if (res.data?.gatewayUrl) {
      window.location.replace(res.data.gatewayUrl);
    }

  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-2">Payment Details</h2>
      <p className="text-gray-600 mb-4">
        Complete your order by providing your payment details
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        defaultValue={user?.email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />
      <button
        onClick={handleCreatePayment}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Please Order
      </button>
    </div>
  );
};

export default SslPayment;
