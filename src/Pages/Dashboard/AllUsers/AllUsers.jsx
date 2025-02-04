import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    // update user in database
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} has been made an admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelete = (userId) => {
    // delete item from database
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
        axiosSecure.delete(`/users/${userId}`).then((res) => {
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
        <h3 className="text-xl text-[#D1A054]">---How many??---</h3>
        <div className="flex justify-center">
          <div className="divider w-1/2"></div>
        </div>
        <h1 className="text-4xl ">MANAGE ALL USERS</h1>
        <div className="flex justify-center">
          <div className="divider w-1/2"></div>
        </div>
      </div>
      <div className="bg-white p-5">
        <h2 className="text-3xl font-semibold font-serif mt-4">
          Total Users : {users.length}
        </h2>

        {/* table */}
        <div className="overflow-x-auto mt-5">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-[16px] font-semibold p-5">
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {/* row  */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm text-xl bg-[#D1A054]"
                      >
                        <FaUsers className="text-white" />
                      </button>
                    )}
                  </td>

                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
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

export default AllUsers;
