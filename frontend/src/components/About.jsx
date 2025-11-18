import React from "react";

const About = () => {
  return (
    <section
      className="section about-banner"
      id="about"
      data-aos="fade-up"
    >
      <div className="about-inner container">
        {/* Left text column */}
        <div className="about-text">
          <p className="script-font about-small-heading">
            Hi there! I&apos;m Your Name
          </p>
          <h2>Soft glam, editorial & bridal beauty.</h2>
          <p>
            I create polished, camera-ready looks that still feel like you.
            From natural glow to full glam, my focus is on seamless skin,
            flattering tones and long-lasting wear for every event.
          </p>
          <button className="outline-button">
            Learn more about me
          </button>
        </div>

        {/* Right image collage */}
        <div className="about-collage">
          <div className="about-main-image" />
          <div className="about-side-images">
            <div className="about-side-image about-side-1" />
            <div className="about-side-image about-side-2" />
          </div>
          <p className="script-font about-signature">Your Name xo</p>
        </div>
      </div>
    </section>
  );
};

export default About;
