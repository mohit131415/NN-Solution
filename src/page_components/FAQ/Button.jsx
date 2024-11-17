import { useState } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const ExpandableButton = ({ title, children, className = "", white = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const buttonClasses = `
    button w-full p-5 border-2 rounded-lg cursor-pointer transition-all duration-300
    ${white ? "bg-white text-n-8" : "bg-gray-900 text-n-1"}
    ${isExpanded ? "border-gray-500" : "border-gray-300"}
    ${className}
  `;

  return (
    <div className={buttonClasses} onClick={handleToggle}>
      {/* Title and Toggle Icon */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="ml-2 transition-transform duration-300">
          {isExpanded ? (
            <span className="text-red-500">✖</span> // 'X' icon when expanded
          ) : (
            <span className="text-green-500">➕</span> // '+' icon when collapsed
          )}
        </span>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="mt-4 text-sm text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableButton;
