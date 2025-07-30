import React from "react";
import InputSyle from '../assets/cssfile/input.module.css'; // if used elsewhere

const InputText = ({ title, placename, types = "text", error = false, errorMessage = "" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-slate-700 text-lg">
        {title}
      </label>

      <input
        type={types}
        placeholder={placename}
        onChange={(e) => console.log(e.target.value)}
        name={`no-autofill-${title.toLowerCase()}`}
        autoComplete="new-password"
        className={`border rounded px-3 py-2 bg-white text-base focus:outline-none
          ${error
            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-400'
            : 'border-gray-300 focus:border-[#17a2b8] focus:ring-1 focus:ring-[#82dfed]'}
        `}
      />

      {error && (
        <p className="text-sm text-red-600">{errorMessage || `${title} is required`}</p>
      )}
    </div>
  );
};

export default InputText;
