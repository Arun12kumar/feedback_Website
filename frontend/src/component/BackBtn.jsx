import React from "react";
import { ArrowLeft } from "lucide-react";


const BackBtn = () => {

  return (
    <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition flex justify-center items-center gap-1">
      <ArrowLeft />
      <p>Back</p>
    </button>
  );
};

export default BackBtn;
