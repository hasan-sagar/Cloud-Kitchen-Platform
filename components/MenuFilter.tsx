import { ArrowUpDown, X } from "lucide-react";

interface props {
  isModalOpen: boolean;
  onClose?: () => void;
}

export function MenuFilter({ isModalOpen, onClose }: props) {
  return (
    <>
      <aside
        className={`fixed top-0 right-0 z-50 h-full lg:w-3/12 w-10/12 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 relative h-full flex flex-col">
          {/* Header */}
          {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2> */}

          {/* Close Button */}
          <button
            className="absolute top-7 right-4 text-gray-400 hover:text-gray-800 transition-colors"
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
                {[
                  "Most Popular",
                  "Price: Low to High",
                  "Price: High to Low",
                  "Highest Rated",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center text-gray-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="sort-by"
                      value={option}
                      className="form-radio text-orange-500 rounded-full focus:ring-orange-500"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Section */}
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-600 mb-2">Price Range</h3>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>$0</span>
                <span>${10}</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg [&::-webkit-slider-thumb]:bg-orange-500 [&::-moz-range-thumb]:bg-orange-500"
              />
            </div>

            {/* Dietary Section */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-600 mb-2">Dietary</h3>
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="vegetarian"
                    className="form-checkbox text-orange-500 rounded focus:ring-orange-500"
                  />
                  <span className="ml-2">Vegetarian Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={onClose}
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
