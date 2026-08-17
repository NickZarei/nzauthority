import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Profile Image & Main Heading */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <Image
          src="/nick.jpg"
          alt="Nick Zarei"
          width={256}
          height={256}
          className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          priority
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

      {/* Main Body Text */}
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
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

      {/* Contact Form Section */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
          {/* Replace YOUR_WEB3FORMS_ACCESS_KEY with your actual Web3Forms API key */}
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full p-3 border rounded-lg" 
              placeholder="Your Name" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full p-3 border rounded-lg" 
              placeholder="your@email.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              name="message" 
              required 
              rows={4} 
              className="w-full p-3 border rounded-lg" 
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}