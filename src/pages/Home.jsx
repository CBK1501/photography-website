
import './Home.css';
import { Link } from "react-router-dom";
import Homecover1 from "../images/Homecover1.jpg"

function Home(){

    return(
      <div
      className="home-hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
          url(${Homecover1})
        `
      }}
    >

      <div className="hero-content">

        <p className="hero-subtitle">
          WELCOME TO OUR PHOTOGRAPHY STUDIO
        </p>

        <h1>
          Every Picture Tells
          <br />
          A Beautiful Story
        </h1>

        <p className="hero-description">
          We capture your precious moments and turn them
          into memories that last forever.
        </p>

        <div className="hero-buttons">
          <Link to="/gallery" className="hero-btn primary-btn">
            Explore Gallery
          </Link>

          <Link to="/contact" className="hero-btn secondary-btn">
            Book Your Shoot
          </Link>
        </div>

      </div>

    </div>

    )

}

export default Home;