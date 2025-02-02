import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const {logOut} =useAuth()
  const navigate = useNavigate()
  // request interceptor to add authorization headers for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log(token, "access token f");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, function (error){
    if (error.response.status === 401 || error.response.status === 403) {
      logOut()
      .then(res => {
        console.log(res, "logged out")
        navigate("/login")
      })
    }
    return Promise.reject(error);
  })

  return axiosSecure;
};

export default useAxiosSecure;
