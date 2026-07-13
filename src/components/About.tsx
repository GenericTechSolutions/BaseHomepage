import '../index.css';

/* ============================================================
   About — centered two-paragraph description block.

   Each paragraph is independently optional so you can swap in
   custom copy or even render richer content (links, code, etc.).
   ============================================================ */

export interface AboutProps {
  title?: string;
  paragraph1?: React.ReactNode;
  paragraph2?: React.ReactNode;
}

export function About({
  title = 'About',
  paragraph1 = 'This is a lightweight landing-page template. It ships with a fixed header, full-viewport hero, three content sections, and a footer — all styled with CSS custom properties so you can re-theme it in one place.',
  paragraph2 = 'Edit the brand name, navigation links, and section text to make it yours. Add or remove feature cards by extending the array in the Features block.',
}: AboutProps) {
  return (
    <section id="about" className="home-section home-section--even">
      <h2 className="home-section__title">{title}</h2>
      <div className="about__wrapper">
        <p className="about__text">{paragraph1}</p>
        <p className="about__text about__text--secondary">{paragraph2}</p>
      </div>
    </section>
  );
}
