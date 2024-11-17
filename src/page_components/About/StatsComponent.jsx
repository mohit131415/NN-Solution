import React, { useEffect, useState, useRef } from "react";
import Section from "../components/Section";

// Dummy icon data, you can replace these with actual icons or SVGs.
const icons = {
  clients: "👥",
  projects: "📁",
  support: "🕒",
  workers: "💼",
};

const StatsComponent = () => {
  // Data for the stats
  const statsData = [
    { value: 20, label: "Clients", icon: icons.clients },
    { value: 100, label: "Projects", icon: icons.projects },
    { value: 1000, label: "Hours Of Support", icon: icons.support },
    { value: 10, label: "Hard Workers", icon: icons.workers },
  ];

  // State for animated values
  const [animatedValues, setAnimatedValues] = useState(statsData.map(stat => ({ ...stat, count: 0 })));
  
  const statsRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect when the component is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatedValues.forEach((stat, index) => {
            const countUp = () => {
              setAnimatedValues(prev => {
                const newStats = [...prev];
                if (newStats[index].count < stat.value) {
                  newStats[index].count += Math.ceil(stat.value / 100); // Adjust step here
                  return newStats;
                } else {
                  return prev; // Stop updating if the count reaches the value
                }
              });
            };

            // Use requestAnimationFrame for smooth animation
            const interval = setInterval(countUp, 50); // Adjust the interval for speed

            // Stop counting when the value reaches the target
            if (stat.value > 0) {
              const countDown = () => {
                if (animatedValues[index].count >= stat.value) {
                  clearInterval(interval);
                }
              };
              requestAnimationFrame(countDown);
            }
          });

          // Stop observing once it has animated
          observer.unobserve(entry.target);
        }
      });
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [animatedValues]);

  return (
    <div ref={statsRef} className="flex flex-wrap justify-around p-8 bg-none">
      {animatedValues.map((stat, index) => (
        <div
          key={index}
          className="relative shadow-lg rounded-lg p-6 m-4 text-white transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <div
            className="absolute inset-0 opacity-20 rounded-lg"
            style={{ zIndex: -1 }}
          />
          <div className="flex items-center">
            <span className="text-4xl mr-4">{stat.icon}</span>
            <h2 className="text-5xl font-extrabold">{stat.count}</h2>
          </div>
          <p className="mt-2 text-lg font-semibold">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

// Function to add animations
const AnimationWrapper = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

const StatsSection = () => {
  return (
    <Section>
      <AnimationWrapper>
        <StatsComponent />
      </AnimationWrapper>
    </Section>
  );
};

export default StatsSection;
