import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Tagline from "../components/Tagline";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "../components/design/Roadmap";
import { roadmap1, roadmap2, roadmap3, roadmap4 } from "../assets";

const roaditem = [
  {
    id: "0",
    title: "Innovative Solutions",
    text: "We leverage the latest technologies to provide forward-thinking solutions that keep our clients ahead of the curve.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Expert Team",
    text: "Our team of skilled professionals brings a wealth of experience and expertise to every project.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Tailored Approach",
    text: "We understand that every business is unique, and we customize our solutions to meet your specific needs.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Client-Centric Focus",
    text: "Our commitment to client satisfaction drives us to go above and beyond, ensuring long-lasting partnerships and success.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Know More about us" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roaditem.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
