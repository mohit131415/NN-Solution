 
import ServiceCard from "./card-component/ui/ServiceCard";
import Section from "../components/Section";

function Main() {
  const servicesData = {
    services: [
      {
        id: 1,
        title: "Cloud-based ERP",
        description: "Streamline your business processes with our integrated, scalable cloud ERP system.",
        image: "https://nnsolutions.co.in/assets/img/portfolio/ERP/billing_software/main.jpg",
        price: "Custom"
      },
      {
        id: 2,
        title: "CRM System",
        description: "Build stronger customer relationships with our advanced CRM solution.",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/marquee-crm-software.jpg?w=1024",
        price: "From $99/mo"
      },
      {
        id: 3,
        title: "Learning Management System",
        description: "Facilitate e-learning with our comprehensive LMS for course creation and student management.",
        image: "https://blog.learnyst.com/hubfs/Imported_Blog_Media/lms.png",
        price: "From $79/mo"
      },
      {
        id: 4,
        title: "Doctor Appointment System",
        description: "Enhance patient engagement with our appointment system and custom landing page.",
        image: "https://repository-images.githubusercontent.com/499518132/c00dbe03-2a52-479b-b5e3-ac3abf40a928",
        price: "Custom"
      },
      {
        id: 5,
        title: "Payment Gateway Configuration",
        description: "Secure and streamline your online transactions with our payment gateway setup.",
        image: "https://chargemonk.com/help/assets/payment-gateway/payment-gateway-29.png",
        price: "From $49/mo"
      },
      {
        id: 6,
        title: "Restaurant Management Website",
        description: "Showcase your menu and services with our tailored static website for restaurants.",
        image: "https://www.agilecodex.com/media/wysiwyg/agile_codex/restaurant_management/restaurant-management-sale.PNG",
        price: "From $299"
      },
      {
        id: 7,
        title: "Mobile Application Development",
        description: "Bring your business to your customers' fingertips with our custom mobile apps.",
        image: "https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg",
        price: "Custom"
      },
      {
        id: 8,
        title: "Cloud Infrastructure Management",
        description: "Optimize performance and security with our comprehensive cloud infrastructure services.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMV29yT5GYu1yETJKuAzeyhMVnVQlZoSbetA&s",
        price: "From $199/mo"
      },
      {
        id: 9,
        title: "Software Support",
        description: "Ensure smooth operations with our dedicated software support team.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQER355ly2iEtT23-Ili1shZJ2UNSwnvJeeYg&s",
        price: "From $89/mo"
      }
    ]
  };

  return (
    <>
    <Section crosses className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {servicesData.services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </Section>
    </>
  );
}

export default Main;
