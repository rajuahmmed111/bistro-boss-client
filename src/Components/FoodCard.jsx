import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddCart = () => {
    // send to item in database
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 2000,
          });
        // refetch cart to update the cart items
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send to user login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-[#F3F3F3] w-80 shadow-xl mb-5">
      <figure>
        <img
          className="w-full h-[300px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="text-xl text-center text-white bg-[#151515] px-3 py-1 font-semibold absolute  right-4 top-4 rounded-md">
        ${price}
      </p>
      <div className="card-body footer-center">
        <h2 className="card-title">{name}</h2>
        <p className="mt-2 mb-4">{recipe}</p>

        <div className="card-actions justify-center">
          <button
            onClick={handleAddCart}
            className="btn btn-outline border-0 border-b-4 uppercase text-[#BB8506]   hover:bg-[#1f2937] border-[#BB8506] mb-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
