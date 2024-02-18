import image17 from '../../public/image17.png';
import image18 from '../../public/image18.png';
import image19 from "../../public/image19.png";

const Booking = () => {
  return (
    <section className="booking__container">
      <div className="booking__content">
        <h3>BOOKING PROCESS</h3>
        <div className="booking__card__container">
          <div className="booking__card">
            <img src={image17} alt="" />
            <h5>Search and Finalise</h5>
            <p>Choose from several verified Premium housing listings.</p>
          </div>
          <div className="booking__card">
            <img src={image18} alt="" />
            <h5>Smooth Automated Paperwork</h5>
            <p>Don’t stress out on too many documents, we have your back!</p>
          </div>
          <div className="booking__card">
            <img src={image19} alt="" />
            <h5>YOUR BOOKING IS CONFIRMED</h5>
            <p>Pack your bag and Let’s MOVE to your new life</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking