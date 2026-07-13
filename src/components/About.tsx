/* ============================================================
   About — "About Us" section with three info cards.
   ============================================================ */

export function About() {
  return (
    <section id="about" className="home-section">
      <h2 className="home-section__title">About Us</h2>
      <p className="home-section__subtitle">
        Dominic Daly is a motivational speaker with lived experience with EUPD, dealt with psychiatric units both good and bad, done unthinkable things, and is now living happy and well. He wants to spread his story to hopefully educate people going into services and help people who are currently going through it. 
        <br /><br /> He has done lectures at universities and training in private mental health services hoping to change the landscape and sigma of not only EUPD, but mental health in general.
      </p>
      <div className="home-cards">
        <article className="home-card">
          <h3 className="home-card__title">Our Mission</h3>
          <p className="home-card__body">
            Empowering people with practical mental health tools, honest conversations, and compassionate guidance — so they can thrive, not just survive.
          </p>
        </article>
        <article className="home-card">
          <h3 className="home-card__title">Our Story</h3>
          <p className="home-card__body">
            Founded by a speaker with lived experience in mental health, we bring real-world insight to every talk, workshop, and conversation.
          </p>
        </article>
        <article className="home-card">
          <h3 className="home-card__title">Our Values</h3>
          <p className="home-card__body">
            Honesty, empathy, and accountability guide everything we do — from stage to screening room.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
