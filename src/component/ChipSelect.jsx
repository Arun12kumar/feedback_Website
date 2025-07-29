import React, { useState } from "react";
import { X } from "lucide-react";

export const ChipSelect = ({ title,items, placeholder }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = (item) => {
    const exists = selectedItems.find((i) => i.id === item.id);
    if (exists) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const removeItem = (id) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== id));
  };

  const availableItems = items.filter(
    (item) => !selectedItems.some((sel) => sel.id === item.id)
  );

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <label className="font-medium text-slate-700 text-lg">{title}</label>

      {/* Select area with X */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative min-h-[42px] border border-gray-300 rounded px-3 py-2 bg-white text-base text-slate-700 cursor-pointer flex flex-wrap gap-1 items-center focus-within:outline-none focus-within:border-[#17a2b8] focus-within:ring-1 focus-within:ring-[#82dfed]"
      >
        {selectedItems.length === 0 && (
          <span className="text-slate-400">{placeholder}</span>
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

        {/* Close Dropdown button inside input box */}
        {isOpen && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-gray-600"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Dropdown options */}
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
                onClick={() => toggleItem(item)}
              >
                {item.value}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ChipSelect;
