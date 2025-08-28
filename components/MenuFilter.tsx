"use client";
import { ArrowUpDown, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  isModalOpen: boolean;
  onClose?: () => void;
}

type Filters = {
  sortBy: string;
  price: number;
  dietary: string[];
};

export function MenuFilter({ isModalOpen, onClose }: Props) {
  const [filters, setFilters] = useState<Filters>({
    sortBy: "Most Popular",
    price: 0,
    dietary: [],
  });

  // Available filter options
  const filterOptions = {
    sortBy: [
      "Most Popular",
      "Price: Low to High",
      "Price: High to Low",
      "Highest Rated",
    ],
    dietary: ["Vegetarian Only", "Spice Only", "Vegan", "Gluten Free"],
  };

  // Debug log
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const handleSortChange = (value: string) => {
    setFilters((prev) => ({ ...prev, sortBy: value }));
  };

  const handlePriceChange = (value: number) => {
    setFilters((prev) => ({ ...prev, price: value }));
  };

  const handleDietaryChange = (value: string) => {
    setFilters((prev) => {
      const alreadySelected = prev.dietary.includes(value);
      return {
        ...prev,
        dietary: alreadySelected
          ? prev.dietary.filter((item) => item !== value)
          : [...prev.dietary, value],
      };
    });
  };

  return (
    <>
      <aside
        className={`fixed top-0 right-0 z-50 h-full lg:w-3/12 w-10/12 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 relative h-full flex flex-col">
          <button
            className="absolute top-7 right-4 text-mutedColor hover:text-dark transition-colors"
            onClick={onClose}
          >
            <X />
          </button>

          {/* Filter Content Sections */}
          <div className="flex-1 overflow-y-auto">
            {/* Sort By Section */}
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="font-medium text-dark mb-8 flex gap-2 items-center">
                <ArrowUpDown size={18} className="text-dark" />
                Sort By
              </h3>
              <div className="space-y-2">
                {filterOptions.sortBy.map((option) => (
                  <label
                    key={option}
                    className="flex items-center text-mutedColor font-medium cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="sort-by"
                      value={option}
                      checked={filters.sortBy === option}
                      onChange={() => handleSortChange(option)}
                      className="text-primary rounded-full focus:ring-orange-500"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Section */}
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="font-medium text-dark mb-2">Price Range</h3>
              <div className="flex justify-between text-base text-dark mb-2 font-medium">
                <span>$0</span>
                <span>${filters.price}</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={filters.price}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
                className="h-2 w-full bg-gray-200 cursor-pointer rounded-md active:bg-primary"
              />
            </div>

            {/* Dietary Section */}
            <div className="mb-6">
              <h3 className="font-medium text-dark mb-2">Dietary</h3>
              <div className="space-y-2">
                {filterOptions.dietary.map((option) => (
                  <label
                    key={option}
                    className="flex items-center text-mutedColor font-medium cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.dietary.includes(option)}
                      onChange={() => handleDietaryChange(option)}
                      className="text-primary rounded focus:ring-orange-500"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={() => {
              console.log("Applied Filters:", filters);
              onClose?.();
            }}
            className="mt-auto p-3 w-full bg-orange-500 text-white hover:bg-orange-600 rounded-md transition-colors font-semibold"
          >
            Apply Filters
          </button>
        </div>
      </aside>

      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 backdrop-blur-sm z-40 bg-gray-900/50 transition-opacity duration-300 ease-in-out ${
          isModalOpen ? "backdrop-blur-sm" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
    </>
  );
}
