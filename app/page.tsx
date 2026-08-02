import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">
          NZ Authority System
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight">
          Authority Positioning & Inbound Leads for <br />
          <span className="text-blue-400">Financial & Insurance Advisors</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
          We help high-performing financial professionals build digital authority, 
          automate lead capture, and convert ideal prospects without cold outreach.
        </p>
        <a 
          href="#pricing" 
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition"
        >
          View Authority Packages
        </a>
      </header>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Select Your Authority Level</h2>
          <p className="text-slate-400">Transparent pricing tailored to your firm's growth trajectory.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Tier */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-200">Authority Starter</h3>
              <p className="text-slate-400 text-sm mt-2">Essential authority foundation for solo advisors.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold">$900</span>
                <span className="text-slate-400"> CAD / mo + GST</span>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li>✓ 2 Weekly Branded Video + 2 Social Post</li>
                <li>✓ Google Business Profile Optimization</li>
                <li>✓ Basic Automated Lead Capture Form</li>
                <li>✓ Monthly Strategy Call</li>
                <li>✓ Minimum 3-Month Commitment</li>
              </ul>
            </div>
            <button className="w-full bg-slate-800 hover:bg-slate-700 font-semibold py-3 rounded-lg transition">
              Get Started
            </button>
          </div>

          {/* Growth Tier (Featured) */}
          <div className="bg-slate-900 border-2 border-blue-500 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl">
            <span className="bg-blue-600 text-xs uppercase font-bold tracking-wider text-white py-1 px-3 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
              Most Popular
            </span>
            <div>
              <h3 className="text-xl font-bold text-blue-400">Authority Growth</h3>
              <p className="text-slate-400 text-sm mt-2">Complete system to scale lead volume predictably.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold">$1,400</span>
                <span className="text-slate-400"> CAD / mo + GST</span>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li>✓ 2 Weekly Videos + 3 Social Posts</li>
                <li>✓ High-Converting Landing Page Setup</li>
                <li>✓ CRM & Calendly Integration</li>
                <li>✓ Local SEO Keyword Strategy</li>
                <li>✓ Monthly Attribution Reporting</li>
                <li>✓ Minimum 3-Month Commitment</li>
              </ul>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 font-semibold py-3 rounded-lg transition">
              Scale Your Practice
            </button>
          </div>

          {/* Dominance Tier */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-200">Authority Scale</h3>
              <p className="text-slate-400 text-sm mt-2">Full-suite market dominance for established teams.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold">$1,900</span>
                <span className="text-slate-400"> CAD / mo + GST</span>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li>✓ 4 Weekly Videos + Multi-Platform Posts</li>
                <li>✓ Advanced Automated Email Sequences</li>
                <li>✓ Includes $5/Day Initial Ad Campaign (15 Days)</li>
                <li>✓ Webinar & Lead Magnet Funnel</li>
                <li>✓ Bi-weekly Strategy Calls</li>
                <li>✓ Minimum 3-Month Commitment</li>
              </ul>
            </div>
            <button className="w-full bg-slate-800 hover:bg-slate-700 font-semibold py-3 rounded-lg transition">
              Dominate Your Niche
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} NZ Authority Inc. All rights reserved.
      </footer>
    </div>
  );
}