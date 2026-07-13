/* ============================================================
   Hero — full-viewport welcome section with image background.
   ============================================================ */

export function Hero() {
  return (
    <section id="hero" className="home-hero">
      <h1 className="home-hero__title">Better Future</h1>
      <p className="home-hero__subtitle">Be Happier, Live Longer, Enjoy More</p>
      <p className="home-hero__tagline">Speaker with mental health experience</p>
      <a href="#about" className="home-hero__cta home__btn home__btn--primary home__btn--large">Learn More</a>
    </section>
  );
}

export default Hero;
