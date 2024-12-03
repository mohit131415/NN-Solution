"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ClipPathFaq from "../assets/svg/ClipPathFaq"
import { BackgroundGradient } from "./background-gradient"

const ExpandableButton = ({ title, children, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const buttonClasses = `w-[880px] p-5 rounded-xl cursor-pointer transition-all duration-300
    bg-gradient-to-r from-[#1c1c25] to-[#23232d] 
    ${isExpanded ? "shadow-lg" : "shadow-md"}
    ${className}`

  return (
    <div className="relative">
      <BackgroundGradient
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="relative">
        <motion.div
          className={buttonClasses}
          onClick={handleToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={false}
          animate={{
            backgroundColor: isExpanded
              ? "rgba(45, 45, 60, 0.4)"
              : "rgba(28, 28, 37, 0.4)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            clipPath: "url(#Faq)",
            backgroundClip: "padding-box",
            backgroundImage: `linear-gradient(rgba(28, 28, 37, 0.4), rgba(28, 28, 37, 0.4)), 
                        linear-gradient(to right, #2a2a35, ${
                          isExpanded ? "#0F4D71" : "#2a2a35"
                        })`,
            backgroundOrigin: "border-box",
          }}
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
                  isExpanded ? "text-[#2a80b2]" : "text-[#308cc1]"
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
      <ClipPathFaq />
    </div>
  )
}

export default ExpandableButton

