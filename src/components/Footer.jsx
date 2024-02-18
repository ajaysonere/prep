import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <img src={logo} alt="" className="logo" />
          <p>Explore our range of beautiful properties curated for you</p>
          <small>content@gmail.com</small>
          <small>+91 9454541454</small>
          <small>
            Househat UK Limited, 124 City Road, London, England, EC1V 2NX.
          </small>
          <small>
            Househat UK Limited, The Oxford Science Park, Robert Robinson Ave,
            Littlemore, Oxford, OX4 4GP. Contact Us Refer a Friend List with us
            Cancellation Policy Privacy Policy Partner with us Careers FAQs
          </small>
        </div>
        <ul>
          <li>Content us</li>
          <li>Refer a friend </li>
          <li>List with us</li>
          <li>concelletion Policy</li>
          <li>privecy policy</li>
          <li>Partner with us</li>
          <li>Carrers</li>
          <li>FAQs</li>
          <li>T&C</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Google</li>
          <li>Linkedin</li>
        </ul>
      </div>
      <p className="footer__para">
        Karnani is a trading name of HOUSEHAT UK LIMITED registered in England
        and Wales No. 12525449. © Karnani 2024 Househat UK Limited is member
        ofProperty Redress Scheme.Househat UK Limited is a member
        ofUKALAwithClient Money Protection (007396).
      </p>
    </footer>
  );
};

export default Footer;
