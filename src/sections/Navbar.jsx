import { useState } from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

function Navigation({ onNavClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li ">
        <button
          className="nav-link hover:animate-bounce"
          onClick={() => onNavClick("home")}
        >
          Home
        </button>
      </li>
      <li className="nav-li">
        <button
          className="nav-link hover:animate-bounce"
          onClick={() => onNavClick("about")}
        >
          About
        </button>
      </li>
      <li className="nav-li">
        <button
          className="nav-link hover:animate-bounce"
          onClick={() => onNavClick("projects")}
        >
          Work
        </button>
      </li>
      <li className="nav-li">
        <button
          className="nav-link hover:animate-bounce"
          onClick={() => onNavClick("contact")}
        >
          Contact
        </button>
      </li>
      <li className="nav-li">
        <a
          className="nav-link hover:animate-bounce"
          href="https://www.blog.rhv1501.me"
          target="_blank"
        >
          Blog
        </a>
      </li>
    </ul>
  );
}

const Navbar = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white animate-pulse"
          >
            RUDRESH H VYAS
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onNavClick={onNavClick} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onNavClick={onNavClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

Navigation.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

Navbar.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

export default Navbar;
