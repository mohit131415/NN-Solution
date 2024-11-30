import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const ExpandableButton = ({ title, children, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const buttonClasses = `
    w-full p-6 rounded-xl cursor-pointer transition-all duration-300
    bg-gradient-to-r from-[#1c1c25] to-[#23232d] 
    border-2 border-[#2a2a35] hover:border-[#0F4D71]
    ${isExpanded ? "shadow-lg" : "shadow-md"}
    ${className}
  `;
  return (
    <div>
      <motion.div
        className={buttonClasses}
        onClick={handleToggle}
        initial={false}
        animate={{
          backgroundColor: isExpanded
            ? "rgba(45, 45, 60, 0.4)"
            : "rgba(28, 28, 37, 0.4)",
        }}
        transition={{ duration: 0.3 }}
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-200 tracking-wide">
            {title}
          </h3>
          <motion.span
            className="ml-2 text-2xl"
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`transition-colors duration-300 ${
                isExpanded ? "text-teal-400" : "text-teal-500"
              }`}
            >
              +
            </span>
          </motion.span>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-sm text-gray-300 leading-relaxed"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ExpandableButton;
