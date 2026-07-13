import '../index.css';

/* ============================================================
   Features — responsive card grid showcasing key highlights.

   Each card renders a title + description; pass any number of
   items via the `cards` prop (defaults to 3 generic cards).
   ============================================================ */

export interface FeatureCard {
  title: string;
  desc: string;
}

export interface FeaturesProps {
  cards?: FeatureCard[];
}

const DEFAULT_CARDS: FeatureCard[] = [
  { title: 'Fast', desc: 'Optimised for speed with zero external dependencies.' },
  { title: 'Responsive', desc: 'Looks great on every device — mobile, tablet, desktop.' },
  { title: 'Dark-themed', desc: 'Easy on the eyes with a polished dark purple palette.' },
];

export function Features({ cards = DEFAULT_CARDS }: FeaturesProps) {
  return (
    <section id="features" className="home-section home-section--odd">
      <h2 className="home-section__title">Features</h2>
      <p className="home-section__subtitle">Everything you need to get started.</p>

      <div className="features__grid">
        {cards.map((card) => (
          <div key={card.title} className="features__card">
            <h3 className="features__card-title">{card.title}</h3>
            <p className="features__card-text">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
