import { useState } from "react";
import './Navbar.scss';
import Button from "../Ui/Button/Button";
import Logo from "./Logo";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = ({ footer = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to='/'>
          <Logo />
        </Link>
      </div>

      <nav className={`navbar__links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#features" onClick={toggleMenu}>Features</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>

      {!footer && (
        <div className="navbar__button">
          <Button variant="primary" size="md" onClick={() => alert("Primary Clicked!")}>
            Contact Me
          </Button>
        </div>
      )}

      <div className="navbar__toggle" onClick={toggleMenu}>
        {isMobileMenuOpen ? (
          <AiOutlineClose className="navbar__close" />
        ) : (
          <GiHamburgerMenu />
        )}
      </div>
    </header>
  );
};

export default Navbar;
