import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      {/* Top 3-image strip */}
      <div className="hero-gallery" data-aos="fade-up">
        <div className="hero-image hero-image-1" />
        <div className="hero-image hero-image-2" />
        <div className="hero-image hero-image-3" />
      </div>

      {/* Text under images */}
      <div className="hero-intro" data-aos="fade-up" data-aos-delay="150">
        <h1 className="hero-title">
          <span className="script-font">MakeupSite</span>
          Makeup Artist
        </h1>
        <p className="hero-tagline">
          MUA based in <span className="script-font">New York</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
