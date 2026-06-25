import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsRadar from './components/SkillsRadar';
import JourneyTimeline from './components/JourneyTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-300">
      <Navbar />
      <Hero />
      <div className="border-t border-slate-800/30" />
      <About />
      <div className="border-t border-slate-800/30" />
      <SkillsRadar />
      <div className="border-t border-slate-800/30" />
      <JourneyTimeline />
      <div className="border-t border-slate-800/30" />
      <ProjectsGrid />
      <div className="border-t border-slate-800/30" />
      <Certifications />
      <div className="border-t border-slate-800/30" />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
