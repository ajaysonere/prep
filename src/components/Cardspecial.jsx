import image02 from "../../public/image02.png";
import image03 from "../../public/image03.png";
import image04 from "../../public/image04.png";

const Cardspecial = () => {
  return (
    <section className="special__card__container">
      <div className="special__card">
        <img src={image02} alt="bed image" />
        <h4>10,000+ Beds</h4>
        <p>
          Choose from an extensive range of options and book the one that suits
          you the best.
        </p>
      </div>
      <div className="special__card">
        <img src={image03} alt="univercity image" />
        <h4>500+ Universities</h4>
        <p>
          Explore the top student and professional housing options close to city
          centre and prestigious universities.
        </p>
      </div>
      <div className="special__card">
        <img src={image04} alt="bed image" />
        <h4>50+ cities</h4>
        <p>We serve many big cities all across the UK and Australia.</p>
      </div>
    </section>
  );
};

export default Cardspecial;
