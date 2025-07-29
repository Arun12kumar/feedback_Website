import React from "react";
import InputSyle from '../assets/cssfile/input.module.css'

const InputText = ({ title, placename,types="text" }) => {

  
  return (

    <div className="flex flex-col gap-2">
      <label className="font-medium text-slate-700 text-lg]">
        {title}
      </label>
      <input
        type={types}
        placeholder={placename}
        onChange={(e) => console.log(e.target.value)}
        name={`no-autofill-${title.toLowerCase()}`} // use unique or fake name
        autoComplete="new-password" // trick Chrome to avoid autofil
        className="border border-gray-300 rounded px-3 py-2 bg-white text-base text-slate-700 
             focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#82dfed]"
      />
    </div>
  );
};

export default InputText;
