import Logo from "./Logo";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>

      <nav className="footer__links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
