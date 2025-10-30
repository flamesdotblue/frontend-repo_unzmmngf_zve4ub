import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:mbabarwaseem@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Interested in collaborating or want to discuss an opportunity? Drop a line and I’ll get back to you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <form onSubmit={onSubmit} className="md:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 placeholder:text-slate-400 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 placeholder:text-slate-400 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 placeholder:text-slate-400 focus:ring-2"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-700"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-semibold">Professional Links</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-indigo-600" />
                  <a href="#" className="font-medium text-slate-800 hover:underline">
                    LinkedIn: Muhammad Babar Waseem
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-slate-900" />
                  <a href="#" className="font-medium text-slate-800 hover:underline">
                    GitHub: Muhammad Babar Waseem
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <a href="mailto:mbabarwaseem@gmail.com" className="font-medium text-slate-800 hover:underline">
                    mbabarwaseem@gmail.com
                  </a>
                </li>
              </ul>

              <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-600">
                I typically respond within 24–48 hours. For urgent queries, email is best.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
