import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10 lg:px-12">
          <div className="font-semibold tracking-tight text-slate-900">MBW</div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-black/5 bg-white py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Muhammad Babar Waseem. All rights reserved.
      </footer>
    </div>
  );
}
