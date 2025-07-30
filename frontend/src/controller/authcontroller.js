import axios from "../api/axiosInstance";
import { apiUrls } from "../../constants/apiUrls";

export const loginUser = async ({ email, password }) => {
  const response = await axios.post(apiUrls.loginUrl, { email, password });
  return response.data;
};