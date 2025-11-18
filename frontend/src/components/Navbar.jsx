import React from "react";

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar" data-aos="fade-down">
      <div className="nav-logo">MakeupSite</div>
      <nav className="nav-links">
        <button onClick={() => scrollTo("home")}>Home</button>
        <button onClick={() => scrollTo("portfolio")}>Portfolio</button>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Navbar;
