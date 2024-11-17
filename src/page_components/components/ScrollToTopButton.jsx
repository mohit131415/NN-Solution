import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Use an arrow icon
import Button from "./Button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={`!fixed bottom-24 !right-9 p-3 !border-[#0F4D71] text-white shadow-lg transition-opacity z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
