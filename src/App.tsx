import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionIntro from './components/SolutionIntro';
import ConsultationCTA from './components/ConsultationCTA';
import Features from './components/Features';
import Reasoning from './components/Reasoning';
import Flow from './components/Flow';
import CaseStudy from './components/CaseStudy';
import FutureSteps from './components/FutureSteps';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionIntro />
        <ConsultationCTA />
        <Features />
        <Reasoning />
        <Flow />
        <CaseStudy />
        <FutureSteps />
        {/* Final CTA usually duplicates the main CTA or is just the Footer */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

