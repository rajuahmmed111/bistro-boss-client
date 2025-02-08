import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomeAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const res = await axiosSecure.get("order-status");
      return res.data;
    },
  });

  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return {
      name: data.category,
      value: data.revenue,
    };
  });

  return (
    <div>
      <h2 className="text-3xl">
        <span>HI, WELCOME</span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="min-h-screen my-6">
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

        <div className="flex">
          {/* bart chart */}
          <div className="w-1/2">
            <BarChart
              width={400}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>

          {/* pie chart */}
          <div className="w-1/2">
            <PieChart width={400} height={300}>
              <Legend layout="horizontal" align="center" verticalAlign="top" />
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
