import { Header, Footer, Hero, About, Services, Testimonials, Contact } from './components';
import './App.css';

function App() {
  return (
    <div className="home">
      <Header />
      <main className="home__content">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
