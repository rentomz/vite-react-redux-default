import axios from "axios";
import { API_URL } from "../shared/constant";
const http = axios.create({
  baseURL: "https://dummyjson.com",
  // withCredentials: true,
});

export default http;