import { useState, useEffect } from "react";
import "./App.css";

const FEATURED_LOOKS = [
  {
    title: "Soft Rose Bridal Glam",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Soft rose bridal makeup look",
  },
  {
    title: "Golden Hour Glow",
    image:
      "https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Golden hour glam makeup look",
  },
  {
    title: "Classic Red Carpet",
    image:
      "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Classic red carpet makeup look",
  },
  {
    title: "Natural Fresh Glam",
    image:
      "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Natural fresh glam makeup look",
  },
];

// TODO: replace with your real Formspree endpoint, e.g. "https://formspree.io/f/abcd1234"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    service: "Bridal",
    details: "",
  });
  const [status, setStatus] = useState("idle");
  const [currentLookIndex, setCurrentLookIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentLookIndex((prev) => {
        if (FEATURED_LOOKS.length <= 1) return prev;
        let next = prev;
        while (next === prev) {
          next = Math.floor(Math.random() * FEATURED_LOOKS.length);
        }
        return next;
      });
    }, 7000);

    return () => clearInterval(id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const message = `Service: ${form.service}\nEvent date: ${form.date || "(not provided)"}\n\nDetails:\n${form.details}`;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", date: "", service: "Bridal", details: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <div id="top" />
      <div className="page">
        <header className="hero">
          <nav className="nav">
            <a href="#top" className="logo">
              Em's World
            </a>
          <div className="nav-links">
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              Book Now
            </a>
          </div>
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? "nav-toggle-open" : ""}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          {menuOpen && (
            <div className="mobile-nav">
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Book Now
              </a>
            </div>
          )}
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1>Flawless, Timeless Makeup Artistry</h1>
            <p>
              Professional makeup for weddings, special events, photoshoots and personal branding.
              Soft glam, bridal elegance, and red-carpet looks tailored just for you.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn primary">
                Book a Session
              </a>
              <a href="#portfolio" className="btn ghost">
                View Portfolio
              </a>
            </div>
            <div className="hero-badges">
              <span>Bridal • Editorial • Natural Glam</span>
            </div>
          </div>

          <div className="hero-image-card">
            <img
              src={FEATURED_LOOKS[currentLookIndex].image}
              alt={FEATURED_LOOKS[currentLookIndex].alt}
              className="hero-image"
            />
            <div className="hero-tag">
              <span>Featured Look</span>
              <strong>{FEATURED_LOOKS[currentLookIndex].title}</strong>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="portfolio" className="section portfolio">
          <div className="section-header">
            <h2>Signature Looks</h2>
            <p>A curated selection of recent bridal, glam, and editorial work.</p>
          </div>
          <div className="portfolio-tags">
            <span className="portfolio-tag">Bridal</span>
            <span className="portfolio-tag">Soft Glam</span>
            <span className="portfolio-tag">Editorial</span>
            <span className="portfolio-tag">Natural</span>
          </div>
          <div className="portfolio-grid">
            <article className="portfolio-card">
              <img
                src="https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bridal makeup look"
              />
              <div className="portfolio-card-body">
                <span className="portfolio-label">Bridal</span>
                <h3>Soft Bridal Glow</h3>
                <p>Radiant skin, soft pink tones, and weightless lashes for a timeless bridal look.</p>
              </div>
            </article>
            <article className="portfolio-card">
              <img
                src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Glam evening makeup look"
              />
              <div className="portfolio-card-body">
                <span className="portfolio-label">Evening Glam</span>
                <h3>Evening Glam</h3>
                <p>Smokey rose eyes, defined liner, and a satin nude lip for evening events.</p>
              </div>
            </article>
            <article className="portfolio-card">
              <img
                src="https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Editorial makeup look"
              />
              <div className="portfolio-card-body">
                <span className="portfolio-label">Editorial</span>
                <h3>Editorial Rose</h3>
                <p>Monochromatic pinks with a modern, editorial finish for photoshoots.</p>
              </div>
            </article>
            <article className="portfolio-card">
              <img
                src="https://images.pexels.com/photos/3762878/pexels-photo-3762878.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Natural makeup look"
              />
              <div className="portfolio-card-body">
                <span className="portfolio-label">Natural Glam</span>
                <h3>Soft Natural Glam</h3>
                <p>Fresh, skin-focused makeup that enhances your natural features.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-header">
            <h2>Services</h2>
            <p>On-location or in-studio makeup tailored to your occasion.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Bridal Package</h3>
              <p>Includes trial, wedding day makeup, and touch-up kit.</p>
              <span className="service-note">Ideal for brides seeking a flawless, photo-ready finish.</span>
            </div>
            <div className="service-card">
              <h3>Special Event</h3>
              <p>Soft glam or full glam looks for parties, galas, and celebrations.</p>
              <span className="service-note">Lashes and custom complexion included.</span>
            </div>
            <div className="service-card">
              <h3>Photoshoot &amp; Branding</h3>
              <p>Camera-ready makeup for studio shoots and personal branding sessions.</p>
              <span className="service-note">Half-day and full-day rates available.</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-content">
            <div className="about-image-wrapper">
              <img
                src="https://images.pexels.com/photos/3738348/pexels-photo-3738348.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Makeup artist portrait"
              />
            </div>
            <div className="about-text">
              <h2>About the Artist</h2>
              <p>
                With a passion for soft, romantic glam and over 5 years of experience, I specialize in
                creating looks that photograph beautifully while still feeling like you.
              </p>
              <p>
                From intimate bridal parties to editorial campaigns, every face is approached with care,
                attention to detail, and luxury products that last.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-header">
            <h2>Book Your Appointment</h2>
            <p>Share a few details about your event and I&apos;ll be in touch within 24 hours.</p>
          </div>

          <div className="booking-steps">
            <div className="booking-step">
              <span className="booking-step-number">1</span>
              <div className="booking-step-body">
                <h3>Send your event details</h3>
                <p>Share your date, location, and desired look so I can check availability.</p>
              </div>
            </div>
            <div className="booking-step">
              <span className="booking-step-number">2</span>
              <div className="booking-step-body">
                <h3>Review your quote</h3>
                <p>You&apos;ll receive pricing, timing and any travel details tailored to your event.</p>
              </div>
            </div>
            <div className="booking-step">
              <span className="booking-step-number">3</span>
              <div className="booking-step-body">
                <h3>Get glam on the day</h3>
                <p>I arrive on time with a full kit so you can relax and enjoy your moment.</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="date">Event Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option>Bridal</option>
                  <option>Special Event</option>
                  <option>Photoshoot / Branding</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="details">Details</label>
              <textarea
                id="details"
                name="details"
                rows="4"
                placeholder="Number of people, location, preferred time, and any inspiration."
                value={form.details}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn primary full-width" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Submit Inquiry"}
            </button>
            {status === "success" && (
              <p className="form-status success">Thank you! I&apos;ll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="form-status error">Something went wrong. Please try again.</p>
            )}
          </form>

          <div className="contact-extra">
            <p>
              Prefer email? Reach me directly at
              <a className="contact-email" href="mailto:youremail@example.com">
                youremail@example.com
              </a>
              .
            </p>
            <p className="contact-note">
              Please include your event date, location, number of people and any inspiration photos if
              you have them.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Em's World</span>
        <span className="footer-secondary">Bridal • Glam • Editorial</span>
      </footer>
      </div>
    </>
  );
}

export default App;
