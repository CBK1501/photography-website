
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Wedding Photography",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700",
    description: "Beautifully capture every special moment of your wedding day."
  },
  {
    title: "Reception Photography",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700",
    description: "Preserve your reception celebrations and unforgettable memories."
  },
  {
    title: "Pre-Wedding Shoot",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700",
    description: "Create romantic memories with creative pre-wedding photoshoots."
  },
  {
    title: "Candid Photography",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=700",
    description: "Capture natural emotions and beautiful moments without posing."
  },
  {
    title: "Wedding Albums",
    image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=700",
    description: "Turn your favourite wedding photographs into premium albums."
  },
  {
    title: "Photo Frames",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700",
    description: "Display your favourite memories with beautiful photo frames."
  }
];

function Services() {
  return (
    <div className="services">

      <div className="services-heading">
        <p>WHAT WE OFFER</p>
        <h1>Our Photography Services</h1>
        <span>
          Every moment deserves to be captured beautifully.
        </span>
      </div>

      <div className="services-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <Link to="/contact" className="service-btn">
                Enquire Now →
              </Link>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Services;
