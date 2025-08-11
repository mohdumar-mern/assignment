import Logo from "./Logo";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>

      <nav className="footer__links">
        <Link to="/" >Home</Link>
        <Link to="portfolio" >Portfolio</Link>
        <Link to="skills" >Skills</Link>
        <Link to="about-me" >About me</Link>
      </nav>
    </footer>
  );
};

export default Footer;
