import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (itemId) => {
    // delete item from database

    // refetch cart data

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${itemId}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className=" text-center">
        <h3 className="text-xl text-[#D1A054]">---Excellent Ambience---</h3>
        <div className="flex justify-center">
          <div className="divider w-1/3"></div>
        </div>
        <h1 className="text-4xl ">MY BOOKINGS</h1>
        <div className="flex justify-center">
          <div className="divider w-1/3"></div>
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="flex justify-between font-serif mt-4">
          <h2 className="text-3xl">BOOKINGS: {cart.length}</h2>
          <h2 className="text-3xl">TOTAL PRICE: {totalPrice}</h2>
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="btn text-xl font-medium text-white bg-[#D1A054] px-4  py-2 rounded-md">
                Pay
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="btn btn-primary text-xl font-medium text-white px-4  py-2 rounded-md"
            >
              Pay
            </button>
          )}
        </div>

        {/* table */}
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-[16px] font-semibold p-5">
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {/* row  */}
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-[#B91C1c] text-white btn-sm"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
