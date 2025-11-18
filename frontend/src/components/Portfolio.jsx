import React from "react";

const services = [
  {
    name: "Full face without lashes",
    description: "Soft glam or natural skin-focused looks.",
  },
  {
    name: "Full face with lashes",
    description: "Complete glam with strip or individual lashes.",
  },
  {
    name: "Formal / event makeup",
    description: "Evening, prom, and special-occasion glam.",
  },
  {
    name: "Bridal makeup",
    description: "Timeless looks for your wedding day.",
  },
];

const Portfolio = () => {
  return (
    <section className="section services-section" id="portfolio">
      <div className="container">
        <h2 data-aos="fade-up">Services</h2>
        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Makeup for weddings, photoshoots, events and more.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <div className={`service-image service-image-${index + 1}`} />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="services-cta" data-aos="fade-up" data-aos-delay="200">
          <button
            className="outline-button"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact me for booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
