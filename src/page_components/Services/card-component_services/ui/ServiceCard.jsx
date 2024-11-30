import { BackgroundGradient } from "./background-gradient";
import Section from "../../../components/Section";
import { GradientLight } from "../../../components/design/Benefits";
import ClipPath from "../../../assets/svg/ClipPath";
import ClipPathImg from "../../../assets/svg/ClipPathImg";
import Heading from "../../../components/Heading";
import Button from "../../../components/Button";

const ServiceCard = () => {
  const benefits = [
    {
      id: 1,
      title: "Cloud-based ERP",
      description:
        "Streamline your business processes with our integrated, scalable cloud ERP system Will change .",
      image:
        "https://nnsolutions.co.in/assets/img/portfolio/ERP/billing_software/main.jpg",
    },
    {
      id: 2,
      title: "CRM System",
      description:
        "Build stronger customer relationships with our advanced CRM solution Will change  Will change .",
      image:
        "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/marquee-crm-software.jpg?w=1024",
    },
    {
      id: 3,
      title: "Learning Management System",
      description:
        "Facilitate e-learning with our comprehensive LMS for course creation and student management.",
      image: "https://blog.learnyst.com/hubfs/Imported_Blog_Media/lms.png",
    },
    {
      id: 4,
      title: "Doctor Appointment System",
      description:
        "Enhance patient engagement with our appointment system and custom landing page.",
      image:
        "https://repository-images.githubusercontent.com/499518132/c00dbe03-2a52-479b-b5e3-ac3abf40a928",
    },
    {
      id: 5,
      title: "Payment Gateway Configuration",
      description:
        "Secure and streamline your online transactions with our payment gateway setup.",
      image:
        "https://chargemonk.com/help/assets/payment-gateway/payment-gateway-29.png",
    },
    {
      id: 6,
      title: "Restaurant Management Website",
      description:
        "Showcase your menu and services with our tailored static website for restaurants Will change .",
      image:
        "https://www.agilecodex.com/media/wysiwyg/agile_codex/restaurant_management/restaurant-management-sale.PNG",
    },
    {
      id: 7,
      title: "Mobile Application Development",
      description:
        "Bring your business to your customers' fingertips with our custom mobile apps.",
      image:
        "https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg",
    },
    {
      id: 8,
      title: "Cloud Infrastructure Management",
      description:
        "Optimize performance and security with our comprehensive cloud infrastructure services.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMV29yT5GYu1yETJKuAzeyhMVnVQlZoSbetA&s",
    },
    {
      id: 9,
      title: "Software Support",
      description:
        "Ensure smooth operations with our dedicated software support team.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQER355ly2iEtT23-Ili1shZJ2UNSwnvJeeYg&s",
    },
  ];

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl font-bold" title="Our Services" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <BackgroundGradient
              key={item.id}
              className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between h-full group"
              containerClassName="cursor-default transition-transform duration-300 ease-in-out transform hover:scale-105 h-full"
            >
              <div className="relative !z-50 block p-0.5 bg-no-repeat bg-[length:100%_100%]">
                <div className="relative z-2 flex flex-col min-h-[23rem] pt-[1.2rem] px-[1.2rem] pointer-events-none">
                  <div className="relative h-[200px] w-full overflow-hidden mx-auto mb-4">
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute top-1/2 left-1/2 h-full w-full object-cover transform -translate-x-1/2 -translate-y-1/2  !rounded-b-3xl "
                        style={{ clipPath : "url(#image)" }}
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
    </Section>
  );
};

export default ServiceCard;
