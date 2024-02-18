import logo from "../../public/logo.png";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import image05 from "../../public/image05.png";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__content_container">
        <div className="nav__bar">
          <img src={logo} alt="logo" className="logo" />
          <div className="nav__links">
            <button className="btn">Get in touch !</button>
            <IoLogoWhatsapp />
            <FaPhoneAlt />
          </div>
        </div>
        <div className="hero__content">
          <h1>
            Let's Plan Your NextMove{" "}
            <img src={image05} className="content__img"></img>{" "}
          </h1>
          <span>our range of beautiful properties curated for you!</span>
          <button className="btn btn-primary">Explore Now </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
