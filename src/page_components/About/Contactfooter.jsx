 
import Section from "../components/Section";
import Button from "../components/Button";

function Contactfooter() {
  return (
    <Section>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Ready to Transform Your Business?
        </h2>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Let's discuss how NN Solution can help you achieve your technology
          goals.
        </p>
      </div>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20 lg:gap-12">
        <Button href="/contactus">Contact Us</Button>
        <Button href="/portfolio">Portfolio</Button>
      </div>
    </Section>
  );
}

export default Contactfooter;
        