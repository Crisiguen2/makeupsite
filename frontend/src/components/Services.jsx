import React from "react";

const SERVICES = [
  {
    label: "Soft Glam",
    title: "Full face without lashes",
    desc: "Soft glam or natural skin-focused looks that still feel like you.",
    meta: "Approx. 60 minutes",
  },
  {
    label: "Glam",
    title: "Full face with lashes",
    desc: "Complete glam with strip or individual lashes, camera-ready.",
    meta: "Approx. 75 minutes",
  },
  {
    label: "Events",
    title: "Formal / event makeup",
    desc: "Perfect for prom, galas, photoshoots and special occasions.",
    meta: "Evening & daytime options",
  },
  {
    label: "Bridal",
    title: "Bridal makeup",
    desc: "Timeless, elegant bridal looks for your wedding day.",
    meta: "Trials available",
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="section-header">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Makeup for weddings, photoshoots, events and more.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <div key={service.title} className="service-card fade-in-up">
            <div className="service-label">{service.label}</div>
            <div className="service-title">{service.title}</div>
            <div className="service-desc">{service.desc}</div>
            <div className="service-meta">
              <span>{service.meta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="ribbon-row">
        <span>On-location bookings in NYC & surrounding areas.</span>
        <span>Bridal parties & group rates available upon request.</span>
      </div>
    </section>
  );
}

export default Services;
