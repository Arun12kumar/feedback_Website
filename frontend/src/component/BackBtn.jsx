import React from "react";
import { ArrowLeft } from "lucide-react";


const BackBtn = ({title}) => {

  return (
    <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition flex justify-center items-center gap-1">
      <ArrowLeft />
      <p>{title}</p>
    </button>
  );
};

export default BackBtn;
