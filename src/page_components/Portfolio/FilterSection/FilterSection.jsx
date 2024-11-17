// FilterSection.jsx
import  { useState } from "react";
import { filters } from "./filterData";
import FilterOption from "./FilterOption";

export default function FilterSection({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex gap-3 mb-6">
      {filters.map((filter) => (
        <FilterOption
          key={filter.id}
          label={filter.label}
          isSelected={selectedCategory === filter.category}
          onClick={() => handleFilterChange(filter.category)}
        />
      ))}
    </div>
  );
}
