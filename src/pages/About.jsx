
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* About Hero Section */}

      <section className="about-hero">
        <div className="about-hero-content">
          <p>OUR STORY</p>
          <h1>Capturing Moments, Creating Memories</h1>
          <span>
            Every beautiful moment deserves to be remembered forever.
          </span>
        </div>
      </section>

      {/* Studio Introduction */}

      <section className="about-intro">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=900"
            alt="Professional photographer with camera"
          />
        </div>

        <div className="about-text">
          <p className="section-label">ABOUT OUR STUDIO</p>

          <h2>We Turn Your Special Moments Into Timeless Memories</h2>

          <p>
            Welcome to Moments Studio! We are passionate about
            photography and love capturing the beautiful moments
            of your life.
          </p>

          <p>
            From weddings and receptions to pre-wedding shoots,
            candid photography, albums and photo frames, we help
            preserve your precious memories.
          </p>

          <p>
            Our goal is to tell your story through beautiful
            photographs that you can cherish forever.
          </p>

          <Link to="/contact" className="about-btn">
            Contact Us
          </Link>
        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-choose">

        <div className="why-heading">
          <p className="section-label">WHY CHOOSE US</p>
          <h2>What Makes Us Special?</h2>
          <span>
            We focus on quality, creativity and your happiness.
          </span>
        </div>

        <div className="why-container">

          <div className="why-card">
            <div>📸</div>
            <h3>Creative Photography</h3>
            <p>
              We capture your special moments with creativity
              and attention to detail.
            </p>
          </div>

          <div className="why-card">
            <div>💎</div>
            <h3>High Quality</h3>
            <p>
              Beautiful photographs and premium albums
              to preserve your memories.
            </p>
          </div>

          <div className="why-card">
            <div>❤️</div>
            <h3>Customer Satisfaction</h3>
            <p>
              We work to understand your expectations
              and deliver memorable experiences.
            </p>
          </div>

          <div className="why-card">
            <div>✨</div>
            <h3>Attention to Detail</h3>
            <p>
              Every smile, emotion and celebration
              deserves special attention.
            </p>
          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="about-cta">
        <h2>Let's Capture Your Beautiful Story</h2>
        <p>Make your special occasions unforgettable with us.</p>

        <Link to="/contact" className="about-cta-btn">
          Book Your Photography
        </Link>
      </section>

    </div>
  );
}

export default About;
