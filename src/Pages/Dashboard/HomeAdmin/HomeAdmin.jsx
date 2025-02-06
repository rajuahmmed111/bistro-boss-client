import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";

const HomeAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">
        <span>HI, WELCOME</span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="p-6 bg-gray-100 min-h-screen my-6">
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* total revenues */}
          <div className="bg-gradient-to-r from-[#BE3BF5] to-[#F9D4FF] text-white p-4 rounded-xl shadow-md flex justify-center gap-4">
            <div className="flex justify-center items-center">
              <FaDollarSign className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{stats.totalRevenues}</h2>
              <p className="">Revenue</p>
            </div>
          </div>

          {/* total users */}
          <div className="bg-gradient-to-r from-[#D1A054] to-[#FAE4BA] text-white p-4 rounded-xl shadow-md flex justify-center gap-4">
            <div className="flex justify-center items-center">
              <FaUsers className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{stats.totalUsers}</h2>
              <p className="">Customers</p>
            </div>
          </div>

          {/* total products */}
          <div className="bg-gradient-to-r from-[#FE4B82] to-[#FECCE8] text-white p-4 rounded-xl shadow-md flex justify-center gap-4">
            <div className="flex justify-center items-center">
              <AiOutlineProduct className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{stats.totalMenuItems}</h2>
              <p className="">Products</p>
            </div>
          </div>

          {/* total orders */}
          <div className="bg-gradient-to-r from-[#6CAFFF] to-[#B5F6FF] text-white p-4 rounded-xl shadow-md flex justify-center gap-4">
            <div className="flex justify-center items-center">
              <MdProductionQuantityLimits className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{stats.totalOrders}</h2>
              <p className="">Orders</p>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-8">
          <Card>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sold" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default HomeAdmin;
