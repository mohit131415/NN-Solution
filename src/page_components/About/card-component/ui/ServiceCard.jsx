import React from "react";
import { BackgroundGradient } from "./background-gradient";
import Section from "../../../components/Section";
import { GradientLight } from "../../../components/design/Benefits";
import ClipPath from "../../../assets/svg/ClipPath";
import {
  Cloud,
  Shield,
  Headphones,
  Code,
  Server,
  Zap,
} from "lucide-react";
import Heading from "../../../components/Heading";

const ServiceCard = () => {
  const benefits = [
    {
      id: "0",
      title: "Cloud Solutions",
      text: "Scalable and secure cloud infrastructure to support your growing business needs.",
      icon: Cloud,
      light: true,
    },
    {
      id: "1",
      title: "Cybersecurity",
      text: "Protect your digital assets with our advanced security measures and protocols.",
      icon: Shield,
      light: true,
    },
    {
      id: "2",
      title: "IT Consulting",
      text: "Expert advice to align your IT strategy with your business objectives.",
      icon: Headphones,
      light: true,
    },
    {
      id: "3",
      title: "Software Development",
      text: "Custom software solutions tailored to your specific business requirements.",
      icon: Code,
      light: true,
    },
    {
      id: "4",
      title: "Network Infrastructure",
      text: "Robust and reliable network solutions for seamless connectivity.",
      icon: Server,
      light: true,
    },
    {
      id: "5",
      title: "IT Support",
      text: "24/7 technical support to keep your systems running smoothly.",
      icon: Zap,
      light: true,
    },
  ];

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Vision"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <BackgroundGradient
              key={item.id}
              className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between h-full group" // Added `group`
              containerClassName="cursor-default transition-transform duration-300 ease-in-out transform hover:scale-105 h-full"
            >
              <div className="relative !z-50 block p-0.5 bg-no-repeat bg-[length:100%_100%]">
                <div className="relative z-2 flex flex-col min-h-[18rem] p-[2.4rem] pointer-events-none">
                  <div className="flex items-center mb-11 relative">
                    {React.createElement(item.icon, { 
                      size: 24, 
                      className: "text-primary h-8 w-8 group-hover:text-[#3db1f5]" // Icon color change on hover
                    })}
                    <h5 className="h5 ml-5 group-hover:text-[#3db1f5]"> {/* Title color change on hover */}
                      {item.title}
                    </h5>
                  </div>
                  <p className="body-2 text-n-3">{item.text}</p>
                </div>

                {item.light && <GradientLight />}

                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                <ClipPath />
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServiceCard;
