import AboutCompany from '../page_components/About/About_company'
import ServiceCard from '../page_components/About/card-component/ui/ServiceCard'
import Roadmap from "../page_components/About/Roadmap"
import Contactfooter from '../page_components/About/Contactfooter'
import StatsSection from '../page_components/components/StatsComponent'

function About() {
  return (
    <>
      {/* //About company */}
      <AboutCompany />
      <StatsSection />
      {/* //Vision */}
      <ServiceCard />
      {/* //Mission\\What Our Clients Say */}
      <Roadmap />
      <Contactfooter />
    </>
  )
}

export default About