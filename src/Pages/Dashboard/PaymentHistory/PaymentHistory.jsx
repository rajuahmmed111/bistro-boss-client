import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    
  return (
    <div>
      <SectionTitle subHeading="At a Glance!" heading="PAYMENT HISTORY" />
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
