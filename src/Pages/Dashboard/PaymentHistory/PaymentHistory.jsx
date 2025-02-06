import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <div>Loading payment history...</div>;
  if (isError) return <div>Failed to load payment history</div>;

  return (
    <div>
      <div className="text-center">
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

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            <thead className="bg-[#D1A054] text-white text-[16px] font-semibold p-5">
              <tr>
                <th>#</th>
                <th>PRICE</th>
                <th>TRANSACTION ID</th>
                <th>DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              {payments.length > 0 ? (
                payments.map((payment, idx) => (
                  <tr key={payment._id}>
                    <td>{idx + 1}</td>
                    <td>${payment.amount}</td>
                    <td>{payment.transactionId}</td>
                    <td>{new Date(payment.date).toLocaleDateString()}</td>
                    <td>{payment.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center">
                    No payment history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
