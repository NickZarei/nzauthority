import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* 1. بخش عکس و عنوان اصلی */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-black">
          <Image
            src="/nick.jpg"
            alt="Nick Nima Zarei"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Here's What I Know About Small Business Communication
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Turning professionals into trusted authorities in their markets.
          </p>
        </div>
      </div>

      {/* 2. متن اصلی درباره شما */}
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          You're already great at what you do. The problem isn't your skill; it's your visibility. Your best clients don't know you exist. Your pitches fall flat not because your offer is weak, but because the way you present it doesn't match the value you deliver.
        </p>

        <p className="font-semibold text-gray-900">
          Your team knows how to deliver, but they don't know how to articulate why prospects should trust them. I solve this.
        </p>

        <p>
          With 25+ years leading operations and teams across finance, hospitality, and operations, combined with 16 years of hands-on Toastmasters experience and a Division Director role in BC, I've seen what separates businesses that struggle to fill their pipeline from those that can't take on new clients.
        </p>

        <div className="bg-gray-50 border-l-4 border-black p-4 my-6 italic text-gray-800">
          It's not better marketing collateral. It's not luck. It's communication that builds trust fast.
        </div>

        <p>
          I specialize in turning professionals into authorities in their markets: insurance advisors who stand out in a crowded field, financial professionals who attract serious clients, realtors who command respect, and clinic owners who build referral networks on reputation alone.
        </p>

        <p>
          The businesses I work with report stronger client relationships and faster closes, social media content that actually builds authority instead of noise, presentation and pitch confidence that shows in their numbers, and teams aligned on how to communicate what they do.
        </p>

        <p className="text-xl font-bold text-black pt-4">
          This isn't coaching. It's a framework-based strategy applied to your specific market.
        </p>
      </div>
    </div>
  );
}