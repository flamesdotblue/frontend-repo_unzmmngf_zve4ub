import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Geeks of Kolachi',
    desc:
      'A community-driven platform. Led the UI architecture, performance optimizations, and component library using React & Tailwind.',
    stack: ['React', 'Tailwind', 'Node.js'],
    links: { demo: '#', github: '#' },
  },
  {
    name: 'Formaty',
    desc:
      'Form automation and workflow tooling. Built React Native app with seamless API integrations, offline support, and real-time sync.',
    stack: ['React Native', 'Expo', 'GraphQL'],
    links: { demo: '#', github: '#' },
  },
  {
    name: 'Sharyng.ai',
    desc:
      'AI-powered sharing platform. Implemented Next.js front-end, GraphQL APIs, and deep performance profiling for core flows.',
    stack: ['Next.js', 'GraphQL', 'MongoDB'],
    links: { demo: '#', github: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            Case studies of selected work. Includes React Native apps, performance work, and complex API integrations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
              <div className="aspect-video w-full rounded-lg bg-white/5 ring-1 ring-white/10" />

              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.links.demo}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black transition hover:opacity-90"
                >
                  Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={p.links.github}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  Code <Github className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition duration-300 group-hover:ring-white/20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
