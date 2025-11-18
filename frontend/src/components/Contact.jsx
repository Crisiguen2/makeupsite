import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://127.0.0.1:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        {/* Left: big image + quote */}
        <div className="contact-visual" data-aos="fade-right">
          <div className="contact-main-image" />
          <p className="contact-quote">
            &quot;Absolutely loved my makeup! Soft glam that photographed
            beautifully and lasted all night.&quot;
            <br />
            <span className="contact-quote-name">— Client Name</span>
          </p>
        </div>

        {/* Right: form */}
        <div className="contact-panel" data-aos="fade-left">
          <h2>Let&apos;s create your look</h2>
          <p className="section-subtitle">
            Share your event details, inspiration and any notes below.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="hero-button">
              Send enquiry
            </button>

            {status === "success" && (
              <p className="success-text">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="error-text">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
