import image06 from '../../public/image06.png';
import image07 from '../../public/image07.png';

const Special = () => {
  return (
    <section className="special__container">
      <div className="special__content">
        <h1>SPECIAL OFFERS</h1>
        <div className="card__container">
          <div className="card">
            <img src={image06} alt="mobile image" />
            <div className="card__content">
              <h3>Karnani Exclusive Offer</h3>
              <small> Book through us and get £50 as cashback</small>
            </div>
          </div>
          <div className="card">
            <img src={image07} alt="mobile image" />
            <div className="card__content">
              <h3>£100 Amazon Voucher</h3>
              <small>
                {" "}
                For every person who books through your referral, you get a £100
                Amazon gift voucher*
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
