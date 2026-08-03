import React from 'react';
import Link from 'next/link';

export default function Home() {
  const industries = [
    "Insurance Advisors",
    "Financial Professionals",
    "Real Estate Agents",
    "Mortgage Brokers",
    "Lawyers & Legal Firms",
    "Medical & Dental Clinics"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full">
          Authority & Growth Systems
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 leading-tight">
          AI Automation, Modern Websites & SEO for <br />
          <span className="text-blue-400">High-Value Professionals</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
          We build automated growth systems that transform high-trust service businesses into market leaders.
        </p>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-10">
          {industries.map((item, index) => (
            <span key={index} className="bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-md">
              ✓ {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/services" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition"
          >
            Explore Growth Systems
          </Link>
          <Link 
            href="/contact" 
            className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold py-4 px-8 rounded-xl transition"
          >
            Book Strategy Call
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Core Growth Pillars</h2>
          <p className="text-slate-400 mt-2">Tailored technology for modern business growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-blue-400 text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI Automation</h3>
            <p className="text-slate-400 text-sm mb-6">Automate client intake, lead follow-ups, appointment booking, and CRM updates with custom AI workflows.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-blue-400 text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">Website Design</h3>
            <p className="text-slate-400 text-sm mb-6">Ultra-fast, high-converting custom Next.js websites optimized to establish elite authority and capture leads.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-blue-400 text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">SEO & Local Growth</h3>
            <p className="text-slate-400 text-sm mb-6">Dominate local search rankings on Google, outrank competitors, and drive predictable organic inbound traffic.</p>
          </div>
        </div>
      </section>
    </div>
  );
}