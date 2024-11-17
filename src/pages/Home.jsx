import Hero from "../page_components/Home/Hero";
import Roadmap from "../page_components/Home/Roadmap";
import Whoarewe from "../page_components/Home/Whoarewe";
import StatsComponent from "../page_components/components/StatsComponent.jsx";

const Home = () => {
  return (
    <>
        <Hero />
        <Whoarewe /> {/*//Who we are(about us link) */}
        <Roadmap /> 
        <StatsComponent />
        {/* //How it works - (requirements, Kickoff, Development, Deliver)
        //one section for stats
        //Instagram Feed (optional) */}
    </>
  );
};

export default Home;
