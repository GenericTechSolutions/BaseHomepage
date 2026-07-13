/* ============================================================
   Services — "Our Services" section with three service cards.
   ============================================================ */

const services = [
  {
    id: 1,
    title: "Keynote Speaking",
    text: "Engaging, interactive talks on mental health awareness, resilience, and personal growth for conferences and corporate events. We have done lectures at Universities like Salford University and The University of Manchester.",
  },
  {
    id: 2,
    title: "Training",
    text: "We have performed training for staff to get a better understanding for mental health. We also give tailored training programmes for organisations, schools, and community groups — focused on prevention, early intervention, and support.",
  },
  {
    id: 3,
    title: "Advice",
    text: "We have given advice on mental health apps and software as well as talks and education.",
  },
  {
    id: 4,
    title: "Workshops",
    text: "Hands-on sessions designed to equip participants with actionable strategies for managing stress, building resilience, and improving well-being.", 
  }
];
  
export function Services() {
  return (
    <section id="services" className="home-section home-section--alt">
      <h2 className="home-section__title">Our Services</h2>
      <p className="home-section__subtitle">Practical support for every stage of your journey.</p>
      <div className="home-cards">
        {services.map((service) => (
          <article key={service.id} className="home-card">
            <h3 className="home-card__title">{service.title}</h3>
            <p className="home-card__body">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
