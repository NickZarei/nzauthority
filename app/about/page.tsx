export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* بخش عکس و عنوان اصلی */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img
          src="/nick.jpg"
          alt="Nick Zarei"
          className="w-64 h-64 object-cover rounded-2xl shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Here's What I Know About Small Business Communication
          </h1>
          <p className="text-lg text-gray-600">
            You're already great at what you do. The problem isn't your skill; it's your visibility.
          </p>
        </div>
      </div>

      {/* متن‌های اصلی */}
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          Your best clients don't know you exist. Your pitches fall flat not because your offer is weak, but because the way you present it doesn't match the value you deliver.
        </p>

        <p>
          Your team knows how to deliver, but they don't know how to articulate why prospects should trust them. I solve this.
        </p>

        <p>
          With 25+ years leading operations and teams across finance, hospitality, and operations, combined with 16 years of hands-on Toastmasters experience and a Division Director role in BC, I've seen what separates businesses that struggle to fill their pipeline from those that can't take on new clients.
        </p>

        <p>
          It's not better marketing collateral. It's not luck. It's communication that builds trust fast.
        </p>

        <p>
          The businesses I work with report stronger client relationships and faster closes.
        </p>

        <p className="text-xl font-bold text-black pt-4">
          This isn't coaching. It's a framework-based strategy applied to your specific market.
        </p>
      </div>
    </div>
  );
}