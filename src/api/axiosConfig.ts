import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://portfolio-nodejs-api.herokuapp.com/",
  // timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
