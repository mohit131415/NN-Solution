 
import { BackgroundGradient } from "./background-gradient";
import Button from "../../../components/Button";

const ServiceCard = ({ image, title, description, price }) => {
  return (
    <BackgroundGradient className="cursor-default rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between h-full group">
      <div className="relative h-[200px] w-full overflow-hidden mx-auto mb-4">
        <img
          src={image}
          alt={title}
          className="absolute top-1/2 left-1/2 h-full w-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <p className="text-base sm:text-lg text-black font-semibold mb-2 dark:text-neutral-200 group-hover:text-[#3db1f5] transition">
        {title}
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        {description}
      </p>
      <Button
        className="flex items-center justify-center rounded-full py-2 px-4 text-white font-bold transition duration-300 ease-in-out bg-gradient-to-r"
        href="/contactus"
      >
        <span>Contact Us</span>
      </Button>
    </BackgroundGradient>
  );
};

export default ServiceCard;
