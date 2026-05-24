import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LaunchPad",
  description: "Student startup platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-200 px-8 py-4 flex items-center gap-8 bg-white sticky top-0 z-50">
          <span className="font-bold text-blue-900 text-xl mr-4">LaunchPad</span>
          <Link href="/" className="text-gray-600 hover:text-blue-900 font-medium transition">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-900 font-medium transition">About</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-blue-900 font-medium transition">Pricing</Link>
          <Link href="/weather" className="text-gray-600 hover:text-blue-900 font-medium transition">Weather</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-900 font-medium transition">Contact</Link>
          <div className="ml-auto">
            <Link href="/contact"
              className="bg-blue-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition">
              Get Started
            </Link>
          </div>
        </nav>
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 px-8 py-10 mt-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-bold text-blue-900 text-lg">LaunchPad</span>
            <p className="text-gray-400 text-sm">© 2026 LaunchPad. Built by student founders, for student founders.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/about" className="hover:text-blue-900">About</Link>
              <Link href="/pricing" className="hover:text-blue-900">Pricing</Link>
              <Link href="/contact" className="hover:text-blue-900">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}