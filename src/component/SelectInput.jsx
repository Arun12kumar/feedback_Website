import React from "react";

const SelectInput = ({ title, options = [], placeholder = "Select an option" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-slate-700 text-lg">
        {title}
      </label>
      <select
        defaultValue=""
        onChange={(e) => console.log(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 bg-white text-base 
          focus:outline-none focus:border-[#17a2b8] focus:ring-1 focus:ring-[#82dfed]"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
