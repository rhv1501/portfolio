import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import DeveloperShowcase from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

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
    <div className="container mx-auto max-w-7xl">
      <Navbar onNavClick={scrollToSection} />
      <Hero />
      <About id="about" />
      <Projects id="projects" />
      <Experiences />
      <DeveloperShowcase />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default App;
