
import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  // Friend's WhatsApp number (India country code + 10-digit number)
  const whatsappNumber = "916384797251";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    message: ""
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Send enquiry through WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Moments Studio!

New Customer Enquiry

Customer Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Photography Service: ${formData.event}
Event Date: ${formData.date}
Message: ${formData.message}
`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">

      {/* Contact Banner */}
      <section className="contact-banner">
        <p>GET IN TOUCH</p>
        <h1>Let's Capture Your Special Moments</h1>
        <span>
          Tell us about your event. We'd love to be part of your story.
        </span>
      </section>

      {/* Contact Information */}
      <section className="contact-details">

        <div className="contact-info-card">
          <div className="contact-icon">📞</div>
          <h3>Call Us</h3>
          <p>+91 6384797251</p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">✉️</div>
          <h3>Email Us</h3>
          <p>bharanicbk@gmail.com</p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">📍</div>
          <h3>Visit Us</h3>
          <p>Tiruvannamalai</p>
        </div>

      </section>

      {/* Booking Section */}
      <section className="booking-section">

        <div className="booking-text">

          <p className="contact-label">BOOK YOUR SESSION</p>

          <h2>Let's Make Your Memories Last Forever</h2>

          <p>
            Planning a wedding, reception or special event?
            Share your requirements with us. Our team will
            get in touch with you.
          </p>

          <h3>Working Hours</h3>
          <p>Monday - Sunday</p>
          <p>9:00 AM - 8:00 PM</p>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat With Us on WhatsApp
          </a>

        </div>

        {/* Enquiry Form */}
        <div className="booking-form">

          <h2>Photography Enquiry</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="">Select Photography Service</option>
              <option value="Wedding Photography">
                Wedding Photography
              </option>
              <option value="Reception Photography">
                Reception Photography
              </option>
              <option value="Pre-Wedding Shoot">
                Pre-Wedding Shoot
              </option>
              <option value="Candid Photography">
                Candid Photography
              </option>
              <option value="Wedding Albums">
                Wedding Albums
              </option>
              <option value="Photo Frames">
                Photo Frames
              </option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell us about your event..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">
              Send Enquiry →
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;
