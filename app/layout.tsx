import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NZ Authority | AI Automation & Growth Systems",
  description: "Growth systems, AI automation, custom websites, and SEO for high-value professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-400 tracking-wider">
              NZ AUTHORITY
            </Link>
            
            <div className="hidden lg:flex space-x-5 text-sm font-medium text-slate-300">
              <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-400 transition">About</Link>
              <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
              <Link href="/ai-automation" className="hover:text-blue-400 transition">AI Automation</Link>
              <Link href="/website-design" className="hover:text-blue-400 transition">Website Design</Link>
              <Link href="/seo" className="hover:text-blue-400 transition">SEO</Link>
              <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
              <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>

            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg transition"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <div className="flex-grow">
          {children}
        </div>

        <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} NZ Authority Inc. All rights reserved.
        </footer>
      </body>
    </html>
  );
}