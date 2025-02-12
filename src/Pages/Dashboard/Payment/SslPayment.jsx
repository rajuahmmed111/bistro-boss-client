import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const SslPayment = () => {
  const { user } = useAuth();
  const { cart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const payment = {
    email: user?.email,
    amount: totalPrice,
    transactionId: "",
    date: new Date(), // convert utc time use moment js
    cartIds: cart.map((item) => item._id),
    menuItemIds: cart.map((item) => item.menuId),
    status: "pending",
  };

  return <div>SslPayment</div>;
};

export default SslPayment;
