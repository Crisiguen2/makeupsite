import React from "react";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            Makeup Artist – NYC
          </div>

          <h1 className="hero-title">
            Soft Glam, <span>Timeless Beauty.</span>
          </h1>

          <p className="hero-sub">
            Makeup for weddings, photoshoots, special events & all occasions.
            Seamless skin, flattering tones, and long-lasting wear that still
            feels like you.
          </p>

          <div className="hero-cta-row">
            <button className="btn-primary">Book Me</button>
            <button className="btn-outline">View Portfolio</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-card">
            <div className="hero-image-tag">Blush &amp; Glow Studio</div>
            <p className="hero-image-caption">
              Available for NYC and surrounding areas. On-location, camera-ready
              looks for your most photographed moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
