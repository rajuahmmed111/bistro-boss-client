import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ManageItems = () => {
  return (
    <div>
      <SectionTitle
        subHeading="Hurry Up!"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
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

export default ManageItems;
