import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const SslPayment = () => {
  const { user } = useAuth();
  const { cart } = useCart();
  return <div>SslPayment</div>;
};

export default SslPayment;
