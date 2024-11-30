import React from "react";
import { useState } from "react";
import FilterSection from "../Portfolio/FilterSection/FilterSection";
import PortfolioComp from "../Portfolio/Portfolio/PortfolioComp";
import Section from "../components/Section";
import Heading from "../components/Heading";


function PortfolioFPage() {
  const [filterCategory, setFilterCategory] = useState("all");

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  return (
    <>
      <Section crosses>
        <div className="container ">
        <Heading className="md:max-w-md lg:max-w-2xl font-bold" title="Our Portfolio" />
          <FilterSection onFilterChange={handleFilterChange} />
          <PortfolioComp filterCategory={filterCategory} />
        </div>
      </Section>
    </>
  );
}

export default PortfolioFPage;
