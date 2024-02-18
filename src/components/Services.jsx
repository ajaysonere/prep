
const data = [
  {
    heading: "Prime Locations",
    para: "Our accommodations are strategically positioned across the areas, placing you within a reach of local attractions, vibrant city life, and convenient transportation links. Enjoy the best of each area without compromising on accessibility.",
  },
  {
    heading: "Tailored Experiences",
    para: "Find the perfect room that suits your needs, whether it's a cozy single space or a spacious en-suite. Our diverse range of accommodation ensures comfort tailored to your preferences.",
  },
  {
    heading: "Exceptional Amenities",
    para: "Take advantage of modern conveniences such as high-speed Wi-Fi, all incluive bills, entertainment options for relaxation, and dedicated workspaces for your productivity needs.",
  },
  {
    heading: "Impeccable Service",
    para: "Our attentive staff and proprty manager is available, ready to assist you with personalized recommendations and ensuring a seamless and enjoyable stay from check-in to departure.",
  },
  {
    heading: "Safety & Security",
    para: "Rest assured with our commitment to your safety. Our accommodations feature modern security systems, including CCTV surveillance, and strict adherence to safety protocols for your peace of mind.",
  },
  {
    heading: "Affordable Luxury",
    para: "Experience the perfect blend of luxury and affordability. Our accommodations offers premium comfort at competitive rates, allowing you to indulge in a delightful stay without straining your budget.",
  }
];

const Services = () => {
  return (
    <section className="service__container">
      <div className="service__content">
        <h2>Giving You Peace of Mind</h2>
        <div className="service__card__container">
           {
              data.map(({heading , para},index) => {
                 return (
                    <div key={index} className="service__card"> 
                        <h4>{heading}</h4>
                        <p>{para}</p>
                    </div>
                 )
              })
           }
        </div>
      </div>
    </section>
  );
}

export default Services