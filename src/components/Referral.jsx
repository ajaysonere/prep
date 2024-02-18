import image19 from '../../public/image19.jpeg';
const Referral = () => {
  return (
    <section className="referral__container">
      <div className="referral__content__container">
        <h3>REFERRALS</h3>
        <div className="referral__content">
          <div className="referral__left">
            <h2>
              Get $50 with the minimal efforts at all! Earn reward just by
              refeffing a friend.
            </h2>
            <p>
              Convert references into rewards. Receive credit following a
              successful Booking.
            </p>
            <button className="btn referral">Get started</button>
          </div>
          <img src={image19} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Referral;
