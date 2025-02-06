import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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
          <div className="bg-purple-100 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold">{stats.totalRevenues}</h2>
            <p className="text-gray-600">Revenue</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold">{stats.totalUsers}</h2>
            <p className="text-gray-600">Customers</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold">{stats.totalMenuItems}</h2>
            <p className="text-gray-600">Products</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold">{stats.totalOrders}</h2>
            <p className="text-gray-600">Orders</p>
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
