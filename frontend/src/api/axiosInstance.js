import axios from "axios";
import { apiUrls } from "../constants/apiUrls";

const instance = axios.create({
  baseURL: apiUrls.baseAddr, // ✅ Uses central config
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});