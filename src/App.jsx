import Navbar from "./sections/Navbar";
import Seo from "./components/Seo";
import { lazy, Suspense } from "react";

// Move lazy imports outside component for better performance
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Footer = lazy(() => import("./sections/Footer"));
const Experiences = lazy(() => import("./sections/Experiences"));
const DeveloperShowcase = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));

const Loading = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center min-h-screen">
      <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
      </div>
    </div>
  );
};

const App = () => {
  const scrollToSection = (id) => {
    if (id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="container mx-auto max-w-7xl">
        <Seo />
        <Navbar onNavClick={scrollToSection} />
        <Hero />
        <About id="about" />
        <Projects id="projects" />
        <Experiences />
        <DeveloperShowcase />
        <Contact id="contact" />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
