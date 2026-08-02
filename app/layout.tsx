import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NZ Authority | Authority Positioning for Financial Advisors",
  description: "Scale your financial practice with automated lead generation and authority branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
        {/* Navigation Header */}
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-400 tracking-wider">
              NZ AUTHORITY
            </Link>
            
            <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </div>

            <Link 
              href="/book" 
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg transition"
            >
              Book a Call
            </Link>
          </div>
        </nav>

        {/* Dynamic Page Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Shared Footer */}
        <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} NZ Authority Inc. All rights reserved.
        </footer>
      </body>
    </html>
  );
}