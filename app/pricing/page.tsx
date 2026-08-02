export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-extrabold mb-4 text-white">Transparent Pricing</h1>
      <p className="text-slate-400 mb-12">Designed for predictable growth with a 3-month commitment.</p>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white">Starter</h3>
          <p className="text-3xl font-extrabold my-4 text-white">$900 <span className="text-sm font-normal text-slate-400">CAD/mo</span></p>
          <p className="text-slate-400 text-sm">Essential authority foundation.</p>
        </div>
        <div className="bg-slate-900 border-2 border-blue-500 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-blue-400">Growth</h3>
          <p className="text-3xl font-extrabold my-4 text-white">$1,400 <span className="text-sm font-normal text-slate-400">CAD/mo</span></p>
          <p className="text-slate-400 text-sm">Complete lead generation system.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white">Scale</h3>
          <p className="text-3xl font-extrabold my-4 text-white">$1,900 <span className="text-sm font-normal text-slate-400">CAD/mo</span></p>
          <p className="text-slate-400 text-sm">Full dominance & automation.</p>
        </div>
      </div>
    </main>
  );
}