import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const SslPayment = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCreatePayment = async () => {
    // now save the payment in database
    const payment = {
      email: user?.email,
      amount: totalPrice,
      transactionId: "",
      date: new Date(), // convert utc time use moment js
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuId),
      status: "pending",
    };

    const res = await axiosSecure.post("/create-ssl-payment", payment);
    console.log(res.data);
    refetch();

    if (res.data.payment.insertedId) {
      // show alert
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your SSL payment is successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/payment-history");
    }

    console.log(payment, "ssl payment");
  };

  return <div>SslPayment</div>;
};

export default SslPayment;
