import AOSWrapper from '@/components/AOSWrapper';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <main className="bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    </>
  );
}