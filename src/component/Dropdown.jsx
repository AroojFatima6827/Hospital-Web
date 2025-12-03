import React from "react";
import { useState } from "react";
function Dropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full p-2 rounded bg-white text-left border border-gray-300 focus:outline-none"
        >
          {value || label}
        </button>

        {open && (
          <ul className="absolute left-0 top-full w-full bg-white border border-gray-300 rounded shadow-md z-50 max-h-48 overflow-y-auto">
            {options.map((opt, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dropdown;
