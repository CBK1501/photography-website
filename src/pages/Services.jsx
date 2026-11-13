
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import weddingcover from "../images/weddingcover.jpg"
import PrewedCover from "../images/pre-wedCover.jpg"
import RecepCover from "../images/Recep-cover.jpg"
import candidCover from "../images/candid-cover.jpg"
import photoframes from "../images/photoframes.jpg"
import weddingAlbum from "../images/weddingAlbum.jpg"
const services = [
  {
    title: "Wedding Photography",
    image: weddingcover,
    description: "Beautifully capture every special moment of your wedding day."
  },
  {
    title: "Reception Photography",
    image: RecepCover,
    description: "Preserve your reception celebrations and unforgettable memories."
  },
  {
    title: "Pre-Wedding Shoot",
    image: PrewedCover,
    description: "Create romantic memories with creative pre-wedding photoshoots."
  },
  {
    title: "Candid Photography",
    image: candidCover,
    description: "Capture natural emotions and beautiful moments without posing."
  },
  {
    title: "Wedding Albums",
    image: weddingAlbum,
    description: "Turn your favourite wedding photographs into premium albums."
  },
  {
    title: "Photo Frames",
    image: photoframes,
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

              {/* <Link to="/contact" className="service-btn">
                Enquire Now →
              </Link> */}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Services;
