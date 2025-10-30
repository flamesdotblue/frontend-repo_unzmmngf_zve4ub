import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const handleScrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay improves contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 pb-16 md:px-10 lg:px-12">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for new opportunities
        </span>

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Hi, I'm Muhammad Babar Waseem
        </h1>
        <p className="mt-3 max-w-3xl text-base text-white/80 sm:text-lg">
          Senior UI Developer & Full Stack Engineer specializing in React.js, Next.js, and React Native. I build modern, performant, and scalable web and mobile experiences.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={handleScrollToWork}
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black shadow/50 transition hover:shadow-lg hover:shadow-white/20"
          >
            View My Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </button>

          <div className="ml-1 flex items-center gap-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-2 text-xs text-white/70 sm:grid-cols-4">
          {['React', 'Next.js', 'Node.js', 'MongoDB', 'Firebase', 'React Native', 'Expo', 'Tailwind CSS'].map((tech) => (
            <div key={tech} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
