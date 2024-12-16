"use client";

import { useState } from "react";

const VehicleYearSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => currentYear - i
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedYear(event.target.value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-red-500 text-white focus:ring-2 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm h-9 px-6 text-center items-center"
        type="button"
      >
        Year
      </button>
      {isOpen && (
        <div className="absolute z-10 w-48 max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow overflow-y-auto scrollbar-red">
          <ul
            className="p-3 space-y-1 text-sm text-gray-700"
            aria-labelledby="dropdownRadioBgHoverButton"
          >
            {years.map((year) => (
              <li key={year}>
                <div
                  className={`flex items-center p-2 rounded ${
                    selectedYear === year.toString()
                      ? "bg-red-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    id={`radio-${year}`}
                    type="radio"
                    value={year}
                    name="car-year"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    onChange={handleChange}
                    checked={selectedYear === year.toString()}
                  />
                  <label
                    htmlFor={`radio-${year}`}
                    className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                  >
                    {year}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VehicleYearSelector;