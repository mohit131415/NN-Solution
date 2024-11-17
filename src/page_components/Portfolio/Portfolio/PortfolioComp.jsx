// Portfolio.jsx
import PortfolioItem from "./PortfolioItem";
import { portfolioProjects } from "./portfolioData";

export default function PortfolioComp({ filterCategory }) {
  const filteredProjects =
    filterCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === filterCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredProjects.map((project) => (
        <PortfolioItem key={project.id} title={project.title} description={project.description} />
      ))}
    </div>
  );
}
