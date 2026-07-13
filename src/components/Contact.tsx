import '../index.css';

/* ============================================================
   Contact — heading + subtitle placeholder for a contact area.

   Drop in a form or email link inside the wrapper when you're
   ready to make it interactive.
   ============================================================ */

export interface ContactProps {
  title?: string;
  subtitle?: string;
}

export function Contact({
  title = 'Contact',
  subtitle = 'Get in touch — drop us a message below.',
}: ContactProps) {
  return (
    <section id="contact" className="home-section home-section--odd">
      <h2 className="home-section__title">{title}</h2>
      <p className="home-section__subtitle">{subtitle}</p>
    </section>
  );
}
