import React from "react";

const Message = ({ 
  title, 
  name, 
  placename, 
  value, 
  onChange, 
  error = false, 
  errorMessage = "",
  required = false 
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-slate-700 text-lg">
        {title}
        {required && <span className="text-red-500">*</span>}
      </label>

      <textarea
        name={name}
        placeholder={placename}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete="off"
        className={`border rounded px-3 py-2 bg-white h-20 text-base text-slate-700 resize-none
          focus:outline-none 
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

export default Message;