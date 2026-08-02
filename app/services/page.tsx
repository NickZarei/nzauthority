export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-400">Our Services</h1>
      <p className="text-slate-300 text-lg mb-8">
        We build authority systems for financial and insurance advisors.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-white">Content Strategy & Production</h3>
          <p className="text-slate-400">High-converting weekly video and text content designed for high trust.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-white">Inbound Lead Funnels</h3>
          <p className="text-slate-400">Automated landing pages and booking forms that convert views into client calls.</p>
        </div>
      </div>
    </main>
  );
}