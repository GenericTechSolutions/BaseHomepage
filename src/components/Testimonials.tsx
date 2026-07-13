/* ============================================================
   Testimonials — customer quote cards section.
   ============================================================ */

const cards = [
  {
    id: 1,
    title: "Dr. Tony Gill - University Lecturer",
    info: ` As part of a lived experiences week for students at Salford University, I invited Dom to speak to students about his experiences and to share his story.
Dom was very courageous to stand up and speak to students whom he had never met,  and his insightful account of his own experiences was truly inspiring.
Dom was truly brilliant and his passionate and clear account of his own struggles was very insightful for all of us .
I was very grateful for Doms's account and it has given so many students a better insight and will help them understand individuals better and help that gain a better quality of care.
I would highly recommend Dom to speak as his experiences can only help devlop a greater understanding`,
    location: "University of Salford",
  },
  {
    id: 2,
    title: "University Student",
    info: ` It was a great benefit to hear from all the speakers about their experiences with different mental health conditions and the experiences they have had with services, stigma, community resources, and various coping mechanisms that have been helpful. It also helped to highlight and reinforce the impact that the attitude and actions of people involved in the care of a person can have on a person's experience of services/interactions. Thank you again for putting it together, and to all the speakers for taking the time to speak to us, share their experiences, and answer our questions.`,
    location: "University of Salford",
  },
  {
    id: 3,
    title: "University Student",
    info: ` I absolutely loved this and it was so insightful into what people actually live with on a day-to-day basis, not only in a hospital setting. You were amazing and I'm grateful you took time out of your day to come and speak with us and were so open to any and all questions that were asked at the end. Thank you for organizing this week, I'd recommend it to anyone in other years that have the chance to go to it.`,
    location: "University of Manchester",
  },
  {
    id: 4,
    title: "University Student",
    info: ` Amazing! Amazing! Amazing!!! It was highly informative. It enhanced my understanding on depression, self harm and EPUD. It really motiveated me never to give up in life come what may. I am so happy I attended all and waited till the end. Thanks`,
    location: "University of Manchester",
  },
  {
    id: 5,
    title: "University Student",
    info: ` Thanks for attending university this week to give us insight into your experiences around mental health. I really appreciate how courageous you were to stand in front of us students and tell us your experiences. I have learned a lot from the speaker and appreciate the time he took out of his day to share his story.`,
    location: "University of Salford",
  },
  {
    id: 6,
    title: "University Student",
    info: ` Loved this week and thank you are taking the time out of your day to come and speak to us. It was very insightful you have the guts for standing up there and telling your life stories. It helped me have more of an understanding of what goes through day to day`,
    location: "University of Manchester",
  },
  {
    id: 7,
    title: "AMHP at Stockport Council",
    info: ` Dom delivered his expert by experience (I acknowlege his also has professional expertise in service design and training) session about his journey through services with absolute clarity and with a level of detail and disclosure that made this a very powerful, and at times appropriately discomforting experience.`,
    location: "Stockport Council",
  },
  {
    id: 8,
    title: "Stockport Council Professional",
    info: ` Personally the description of falling that Dom gave - of how this felt like hours and how at this time he wanted to have a chance to try again at living was profound. There have been times when trainee AMHPs ask me what they should read in preparation for the  AMHP course, I always recommend first person accounts of emotional distress and experience of services. Dom's testament was even more powerful as he spoke it.`,
    location: "Stockport Council",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="home-section">
      <h2 className="home-section__title">Testimonials</h2>
      <p className="home-section__subtitle">What people say after working with us.</p>
      <div className="home-cards">
        {cards.map((card) => (
          <article key={card.id} className="home-card home-card--highlighted">
            <blockquote className="home-card__quote">
              "{card.info.trim()}"
            </blockquote>
            <cite className="home-card__author">— {card.title}</cite>
            <cite className="home-card__author">{card.location}</cite>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
