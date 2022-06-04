import axios from "axios";

const axiosI = axios.create({
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosI