import '../index.css';

/* ============================================================
   Hero — full-viewport welcome block with headline, tagline,
   and a primary CTA button.
   ============================================================ */

export interface HeroProps {
  title?: string;           /* displayed headline (default "Welcome to My Site") */
  subtitle?: string;        /* larger descriptive text */
  tagline?: string;         /* muted secondary paragraph */
  ctaText?: string;         /* label for the CTA button */
  ctaHref?: string;         /* link destination for the CTA button */
}

export function Hero({
  title = 'Welcome to My Site',
  subtitle = 'Your tagline goes here.',
  tagline = 'A short description of what you do — tell visitors why they should care in 1-2 sentences.',
  ctaText = 'Explore Features',
  ctaHref = '#features',
}: HeroProps) {
  return (
    <section id="hero" className="home-hero">
      <h1 className="home-hero__title">{title}</h1>
      <p className="home-hero__subtitle">{subtitle}</p>
      <p className="home-hero__tagline">{tagline}</p>
      <a href={ctaHref} className="home-hero__cta home__btn home__btn--primary home__btn--large">
        {ctaText}
      </a>
    </section>
  );
}
