import React from "react";

const SelectInput = ({
  title,
  options = [],
  placeholder = "Select an option",
  error = false,
  errorMessage = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-slate-700">{title}</label>

      <select
        defaultValue=""
        onChange={(e) => console.log(e.target.value)}
        className={`border rounded px-3 py-2 bg-white text-base focus:outline-none
          ${error
            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-400"
            : "border-gray-300 focus:border-[#17a2b8] focus:ring-1 focus:ring-[#82dfed]"}
        `}
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

      {error && (
        <p className="text-sm text-red-600">{errorMessage || `${title} is required`}</p>
      )}
    </div>
  );
};

export default SelectInput;

