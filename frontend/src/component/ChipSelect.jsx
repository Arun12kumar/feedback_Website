import React, { useState } from "react";
import { X } from "lucide-react";

const ChipSelect = ({ 
  title, 
  items, 
  placeholder, 
  selectedItems = [], 
  onSelectionChange, 
  error = false, 
  errorMessage = "",
  required = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = (item) => {
    const exists = selectedItems.find((i) => i.id === item.id);
    let newSelection;
    
    if (exists) {
      newSelection = selectedItems.filter((i) => i.id !== item.id);
    } else {
      newSelection = [...selectedItems, item];
    }
    
    onSelectionChange(newSelection);
  };

  const removeItem = (id) => {
    const newSelection = selectedItems.filter((i) => i.id !== id);
    onSelectionChange(newSelection);
  };

  const availableItems = items.filter(
    (item) => !selectedItems.some((sel) => sel.id === item.id)
  );

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <label className="font-medium text-slate-700">
        {title}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Chip Box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`relative min-h-[42px] h-20 overflow-y-auto border rounded px-3 pt-3 pb-2 bg-white text-base text-slate-700 cursor-pointer flex flex-wrap gap-1 items-start
          ${error
            ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-400'
            : 'border-gray-300 focus-within:border-[#17a2b8] focus-within:ring-[#82dfed]'}
          focus-within:outline-none focus-within:ring-1`}
      >
        {selectedItems.length === 0 && (
          <span className="text-gray-400">{placeholder}</span>
        )}
        {selectedItems.map((item) => (
          <span
            key={item.id}
            className="bg-[#17a2b8] text-white rounded-full px-3 py-1 text-sm flex items-center gap-2"
          >
            {item.value}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeItem(item.id);
              }}
              className="text-white hover:text-gray-200"
            >
              <X size={14} />
            </button>
          </span>
        ))}

        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <X size={16} />
        </button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-1 w-full border border-gray-300 rounded max-h-42 overflow-y-auto bg-white shadow-md z-10">
          {availableItems.length === 0 ? (
            <div className="px-4 py-2 text-sm text-slate-400">
              No more options
            </div>
          ) : (
            availableItems.map((item) => (
              <div
                key={item.id}
                className="px-4 py-2 cursor-pointer hover:bg-[#f1fafa]"
                onClick={() => {
                  toggleItem(item);
                  setIsOpen(false);
                }}
              >
                {item.value}
              </div>
            ))
          )}
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className="text-sm text-red-600">{errorMessage || `${title} is required`}</p>
      )}
    </div>
  );
};

export default ChipSelect;