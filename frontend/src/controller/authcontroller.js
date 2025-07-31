import axios from "../api/axiosInstance";
import { apiUrls } from "../constant/apiUrlLinks";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query"; 

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (credentials) => {
      const response = await axios.post(apiUrls.loginurl, credentials); 
      return response.data;
      
    },
    onSuccess: (data) => {
      login(data.token, data.user);
      Swal.fire({
        title: "Success!",
        text: "You have successfully logged in.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/dashboard/Enquiries");
      });
    },
    onError: (error) => {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });
};
