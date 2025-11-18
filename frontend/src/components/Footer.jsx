import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="container footer-content">
        <p>© {year} MakeupSite</p>
        <div className="socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#">Booking</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
