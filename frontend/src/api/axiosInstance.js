// src/api/axiosInstance.js
import axios from "axios";
import { apiUrls } from "../constant/apiUrlLinks";

const instance = axios.create({
  baseURL: apiUrls.baseAddr,
  withCredentials: true, // ✅ Keep if using cookies (can also work with JWT+sessions)
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token from localStorage
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
