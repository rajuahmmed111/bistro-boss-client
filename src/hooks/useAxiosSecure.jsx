import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-six-teal.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  // request interceptor to add authorization headers for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("login time sent do not token", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
