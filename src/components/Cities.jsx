import image08 from '../../public/image08.jpeg';
import image09 from '../../public/image09.jpeg';
import image10 from '../../public/image10.jpeg';
import image11 from '../../public/image11.jpeg';
import image12 from '../../public/image12.jpeg';
import image13 from '../../public/image13.jpeg';
import image14 from '../../public/image14.jpeg';
import image15 from '../../public/image15.jpeg';
import image16 from '../../public/image16.jpeg';
const Cities = () => {
  return (
    <section className="city__container">
      <div className="city__content">
        <h2 className="top-cities">TOP CITIES WE COVER</h2>
        <div className="city__images">
          <img src={image08} alt="galler-image" className="item" />
          <img src={image09} alt="galler-image" className="item" />
          <img src={image10} alt="galler-image" className="item" />
          <img src={image11} alt="galler-image" className="item" />
          <img src={image12} alt="galler-image" className="item" />
          <img src={image13} alt="galler-image" className="item" />
          <img src={image14} alt="galler-image" className="item" />
          <img src={image15} alt="galler-image" className="item" />
          <img src={image16} alt="galler-image" className="item" />
        </div>
        <button className='btn'>EXPLORE MORE</button>
      </div>
    </section>
  );
}

export default Cities