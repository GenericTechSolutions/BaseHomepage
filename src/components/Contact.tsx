/* ============================================================
   Contact — form section for reaching out.
   ============================================================ */

import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Hook up your form submission here (e.g. API call, email service).
  };

  return (
    <section id="contact" className="home-section home-section--alt">
      <h2 className="home-section__title">Contact</h2>
      <p className="home-section__subtitle">
        Get in touch to discuss speaking engagements or training sessions.
      </p>

      {submitted ? (
        <div className="home-card home-card--highlighted" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
          <p style={{ fontSize: 'var(--text-xlarge)', color: 'var(--text-primary)' }}>
            Thank you! We'll be in touch soon.
          </p>
        </div>
      ) : (
        <form className="home-form" onSubmit={handleSubmit}>
          <input id="contact-name" type="text" placeholder="Your name" required />
          <input id="contact-email" type="email" placeholder="Email" required />
          <input id="contact-phone" type="tel" placeholder="Contact No" />
          <textarea
            id="contact-message"
            rows={6}
            placeholder="How can we help?"
            required
          />

          <button type="submit" className="home__btn home__btn--primary home__btn--large">Send</button>
        </form>
      )}
    </section>
  );
}
