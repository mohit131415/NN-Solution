import { useState } from "react";
import FilterSection from "../page_components/Portfolio/FilterSection/FilterSection";
import PortfolioComp from "../page_components/Portfolio/Portfolio/PortfolioComp";
import EmailAsk from "../page_components/components/EmailAsk";
import Section from "../page_components/components/Section";

function Portfolio() {

  const [filterCategory, setFilterCategory] = useState("all");

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };
  return (
    <>
     <Section className="container  ">
      <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
      <FilterSection onFilterChange={handleFilterChange} />
      <PortfolioComp filterCategory={filterCategory} />
    </Section>
      <EmailAsk />
      {/* //projects with filters
      //## Single Portfolio page */}
      {/* detail about project
        Request an demo
    Contact on whatsapp */}
    </>
  );
}

export default Portfolio;
