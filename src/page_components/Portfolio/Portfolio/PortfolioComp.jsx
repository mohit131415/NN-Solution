import PortfolioItem from "./PortfolioItem";
import { portfolioProjects } from "./portfolioData";
import { BackgroundGradient } from "./background-gradient";
import Section from "../../components/Section";
import { GradientLight } from "../../components/design/Benefits";
import ClipPath from "../../assets/svg/ClipPath";
import ClipPathImg from "../../assets/svg/ClipPathImg";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

export default function PortfolioComp({ filterCategory }) {
  const filteredProjects =
    filterCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === filterCategory
        );

  return (
    <div id="features">
      <div className="container relative z-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <BackgroundGradient
              key={item.id}
              className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between h-full group"
              containerClassName="cursor-default transition-transform duration-300 ease-in-out transform hover:scale-105 h-full"
            >
              <div className="relative !z-50 block p-0.5 bg-no-repeat bg-[length:100%_100%]">
                <div className="relative z-2 flex flex-col min-h-[23rem] pt-[0.7rem] px-[0.7rem] pointer-events-none">
                  <div className="relative h-[200px] w-full overflow-hidden mx-auto mb-4">
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute top-1/2 left-1/2 h-full w-full object-cover transform -translate-x-1/2 -translate-y-1/2  !rounded-b-3xl "
                        style={{ clipPath: "url(#image)" }}
                      />
                    </div>
                    <ClipPathImg />
                  </div>
                  <div className="flex items-center mb-6 mt-2 relative">
                    <h5 className="text-xl font-bold group-hover:text-[#3db1f5]">
                      {item.title}
                    </h5>
                  </div>
                  <div className="flex w-full ">
                    <p className="flex body-2 text-n-3 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex w-full px-3 pb-6 pt-2">
                  <Button className={"w-full !z-40"}>Contact Us</Button>
                </div>
                {item.light && <GradientLight />}
                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                ></div>
                <ClipPath />
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
}
