export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">About LaunchPad</h1>
      <p className="text-gray-500 text-xl mb-12 max-w-2xl">
        We believe the best time to start building is right now.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            LaunchPad gives student founders the tools, community, and knowledge
            to go from idea to deployed product in days — not after graduation,
            not after getting a job. Right now.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Started in 2024 by a group of students frustrated with theory-heavy
            curriculums, LaunchPad has grown into a community of 500+ builders
            across India who ship real products every weekend.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        {[
          { n: "500+", l: "Students" },
          { n: "120+", l: "Products Shipped" },
          { n: "20+", l: "Colleges" },
        ].map((s) => (
          <div key={s.l} className="border border-gray-200 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-blue-900">{s.n}</p>
            <p className="text-gray-500 mt-1">{s.l}</p>
          </div>
        ))}
      </div>

      {/* TEAM */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Shriti Gupta", role: "Technical Team Member", college: "JSSUN" },
          { name: "Team Member 2", role: "Design Lead", college: "JSSUN" },
          { name: "Team Member 3", role: "Product Lead", college: "JSSUN" },
        ].map((m) => (
          <div key={m.name} className="border border-gray-200 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center
                            text-white font-bold text-lg mb-4">
              {m.name[0]}
            </div>
            <p className="font-bold text-gray-900">{m.name}</p>
            <p className="text-blue-900 text-sm font-medium">{m.role}</p>
            <p className="text-gray-400 text-sm">{m.college}</p>
          </div>
        ))}
      </div>
    </div>
  );
}