import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Features from './components/Features';
import Flow from './components/Flow';
import CaseStudy from './components/CaseStudy';
import { CTA, Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <Flow />
        <CaseStudy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
