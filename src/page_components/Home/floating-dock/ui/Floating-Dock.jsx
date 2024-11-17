import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const socialItems = [
  { title: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/yourphonenumber' },
  { title: 'Facebook', icon: <FaFacebookF />, href: 'https://facebook.com/yourpage' },
  { title: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com/youraccount' },
  { title: 'Telegram', icon: <FaTelegramPlane />, href: 'https://t.me/youraccount' },
  { title: 'LinkedIn', icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/yourprofile' },
  { title: 'Email', icon: <FaEnvelope />, href: 'mailto:your@email.com' },
];

const SocialMediaDock = () => {
  return (
    <div className="flex justify-between  w-full">
      <FloatingDock
        items={socialItems}
        className="bg-black/20 backdrop-blur-xl border border-white/10 px-2 py-2 rounded-full"
      />
    </div>
  );
};

const FloatingDock = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto flex items-center gap-1 ${className}`}
    >
      {items.map((item, index) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          isActive={index === activeIndex}
          setActive={() => setActiveIndex(index)}
          setInactive={() => setActiveIndex(null)}
          {...item}
        />
      ))}
    </motion.div>
  );
};

const IconContainer = ({ mouseX, isActive, setActive, setInactive, title, icon, href }) => {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-100, 0, 100], [40, 60, 40]);
  let heightTransform = useTransform(distance, [-100, 0, 100], [40, 60, 40]);

  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-1"
      onMouseEnter={setActive}
      onMouseLeave={setInactive}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="aspect-square rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center relative transition-colors group"
      >
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 absolute left-1/2 -translate-x-1/2 -top-10 text-xs text-white/90 whitespace-nowrap"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="text-white/70 group-hover:text-white/90 transition-colors text-xl">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
};

export default SocialMediaDock;