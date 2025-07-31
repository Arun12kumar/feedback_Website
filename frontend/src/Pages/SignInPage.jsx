import React, { useState } from "react";
import Rectangle from "../component/Rectangle";
import InputText from "../component/InputText";
import SubmitButton from "../component/SubmitButton";
import { useLogin } from "../controller/authcontroller";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const loginMutation = useLogin();

  const validate = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      loginMutation.mutate({ email, password });
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen w-full bg-white overflow-hidden">
      {/* RECTANGLES */}
      <Rectangle className="absolute top-[15%] left-[-10%] w-[250px] sm:w-[300px] h-[100px] bg-[#c9e3f4] rotate-[-10deg] opacity-90 z-0" />
      <Rectangle className="absolute top-[40%] left-[20%] w-[300px] sm:w-[400px] h-[100px] bg-[#17a2b8] rotate-[-5deg] opacity-80 z-0" />
      <Rectangle className="absolute top-[30%] right-[-10%] w-[250px] sm:w-[300px] h-[100px] bg-[#a8e4f0] rotate-[10deg] opacity-80 z-0" />
      <Rectangle className="absolute bottom-[10%] right-[0%] w-[300px] sm:w-[400px] h-[100px] bg-[#d7e6f3] rotate-[5deg] opacity-70 z-0" />

      <div className="w-[90%] md:w-[60%] lg:w-[40%] p-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg z-10">
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold text-center mb-4">Admin Portal SignIn</h1>
          <p className="text-base text-[hsl(188,78%,29%)] mb-6 text-center">
            Authorized access only. Please sign in to manage and monitor activity.
          </p>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <InputText
              title="Email"
              placename="Enter your email"
              types="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              errorMessage={errors.email}
            />
            <InputText
              title="Password"
              placename="Enter your password"
              types="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              errorMessage={errors.password}
            />
          </div>

          <SubmitButton title={loginMutation.isLoading ? "Signing In..." : "SignIn"} />
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
