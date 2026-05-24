export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 border-b border-gray-100">
        <span className="text-sm font-semibold bg-blue-50 text-blue-800 px-4 py-1 rounded-full mb-6">
          🚀 Now open for 2026 cohort
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl">
          Ship Your Idea <br />
          <span className="text-blue-900">Before the Weekend.</span>
        </h1>
        <p className="text-gray-500 text-xl max-w-xl mb-10">
          LaunchPad helps student founders go from idea to deployed product
          in days — not months.
        </p>
        <div className="flex gap-4">
          <a href="/contact"
            className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition text-lg">
            Get Early Access →
          </a>
          <a href="/about"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-900 hover:text-blue-900 transition text-lg">
            Learn More
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { number: "500+", label: "Student Founders" },
            { number: "120+", label: "Products Shipped" },
            { number: "20+", label: "Colleges" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-blue-900 mb-1">{s.number}</p>
              <p className="text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything you need to launch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "⚡", title: "Build Fast", desc: "Go from idea to MVP in a weekend using modern tools and guided templates." },
            { icon: "🤝", title: "Find Co-founders", desc: "Connect with other student builders across 20+ colleges in India." },
            { icon: "📈", title: "Grow Together", desc: "Get feedback, mentorship, and resources to take your product further." },
          ].map((f) => (
            <div key={f.title} className="border border-gray-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-sm transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}