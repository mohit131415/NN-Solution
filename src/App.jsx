import { lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ButtonGradient from "./page_components/assets/svg/ButtonGradient";
import ScrollToTopButton from "./page_components/components/ScrollToTopButton";
import WhatsAppButton from "./page_components/components/WhatsAppButton";

const Header = lazy(() => import("./page_components/components/Header"));
const Footer = lazy(() => import("./page_components/components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Faq = lazy(() => import("./pages/Faq"));
const Contactus = lazy(() => import("./pages/Contactus"));

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactus" element={<Contactus />} />
        </Route>
      </Routes>
      <ButtonGradient />
      <ScrollToTopButton />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
