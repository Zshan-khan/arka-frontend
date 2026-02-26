import axios from "axios";

const API = axios.create({
  baseURL: "https://arka-backend-28zq.onrender.com/api",
});

export default API;
