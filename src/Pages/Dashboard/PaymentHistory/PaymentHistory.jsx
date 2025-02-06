import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className=" text-center">
        <h3 className="text-xl text-[#D1A054]">---At a Glance!---</h3>
        <div className="flex justify-center">
          <div className="divider w-1/3"></div>
        </div>
        <h1 className="text-4xl ">PAYMENT HISTORY</h1>
        <div className="flex justify-center">
          <div className="divider w-1/3"></div>
        </div>
      </div>

      <div className="bg-white p-5">
        <div className="flex justify-between font-serif mt-4">
          <h2 className="text-3xl">Total Payments: {payments.length}</h2>
        </div>

        {/* table */}
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-[16px] font-semibold p-5">
              <tr>
                <th>#</th>
                <th>EMAIL</th>
                <th>CATEGORY</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>

            <tbody>
              {/* row  */}
              {payments.map((payment, idx) => (
                <tr key={payment._id}>
                  <td>{idx + 1}</td>
                  <td>{payment.email}</td>
                  <td>{payment.date}</td>
                  <td>${payment.amount}</td>
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
