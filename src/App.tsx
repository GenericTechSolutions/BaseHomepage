import { Header, Footer, Hero, Features, About, Contact } from './components';
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

        <Hero />

        {/* ---- Features section ---- */}
        <Features />

        {/* ---- About section ---- */}
        <About />

        {/* ---- Contact section ---- */}
        <Contact />

        {/* ---- Footer ---- */}
        <Footer brandName="My Site" legalLinks={LEGAL_LINKS} />

      </main>
    </div>
  );
}

export default App;
