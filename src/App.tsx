import { Header, Footer } from './components';
import './App.css';

/** Nav items for the header. Edit these per site. */
const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/** Legal links for the footer. */
const LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

function App() {
  return (
    <div className="home">
      {/* ---- Header / Toolbar ---- */}
      <Header brandName="My Site" navItems={NAV_ITEMS} />

      {/* ---- Main content ---- */}
      <main className="home__content">

        {/* Hero section — full viewport height */}
        <section id="hero" className="home-hero">
          <h1 className="home-hero__title">Welcome to My Site</h1>
          <p className="home-hero__subtitle">Your tagline goes here.</p>
          <p className="home-hero__tagline">
            A short description of what you do — tell visitors why they should care in 1-2 sentences.
          </p>
          <a href="#features" className="home-hero__cta home__btn home__btn--primary home__btn--large">
            Explore Features
          </a>
        </section>
        {/* ---- Footer ---- */}
        <Footer brandName="My Site" legalLinks={LEGAL_LINKS} />

      </main>
    </div>
  );
}

export default App;
