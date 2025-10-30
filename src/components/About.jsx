import React from 'react';
import { Award, GraduationCap, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 text-slate-800">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-3 text-slate-600">
              I'm a product-focused engineer with a strong eye for design and performance. Over the years, I've delivered scalable web and mobile applications using React.js, Next.js, and React Native, with an emphasis on clean architecture, accessibility, and delightful interactions.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Philosophy</h3>
              <p className="mt-2 text-sm text-slate-600">
                Build for humans first. I combine thoughtful UX, measurable performance, and maintainable code to ship products that scale gracefully. My approach favors incremental delivery, strong component systems, and a deep focus on developer experience.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-base font-semibold">Technical Skills</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    <span className="font-semibold">Frontend:</span> React.js, Next.js, Tailwind CSS, Material UI, SCSS, GSAP
                  </li>
                  <li>
                    <span className="font-semibold">Mobile:</span> React Native, Expo
                  </li>
                  <li>
                    <span className="font-semibold">Backend:</span> Node.js, Express.js, GraphQL, REST APIs
                  </li>
                  <li>
                    <span className="font-semibold">Databases & Cloud:</span> MongoDB, PostgreSQL, Firebase
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-base font-semibold">Education</h3>
                </div>
                <p className="mt-3 text-sm text-slate-700">
                  Bachelor of Science in Computer Science — Sindh Madressatul Islam University
                </p>
                <div className="mt-4 flex items-start gap-2 text-sm text-slate-600">
                  <Award className="mt-0.5 h-4 w-4 text-amber-500" />
                  <span>
                    Certifications and courses from platforms like LinkedIn Learning, Udemy, and Apollo GraphQL.
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-5 md:col-span-2">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-base font-semibold">Hackathons & Achievements</h3>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Systems Limited DevDay Hackathon 2023 — Winner</li>
                  <li>Google Developer Student Clubs WebFest 2022 — Winner</li>
                  <li>Incubations: Formaty and Sharyng.ai — Product development and growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
