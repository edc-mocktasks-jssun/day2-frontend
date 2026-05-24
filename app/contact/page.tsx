export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT — Info */}
        <div>
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Let's Talk</h1>
          <p className="text-gray-500 text-lg mb-10">
            Have a startup idea? Want to join LaunchPad? Just say hello.
          </p>
          <div className="space-y-6">
            {[
              { icon: "📧", label: "Email", value: "hello@launchpad.in" },
              { icon: "📍", label: "Location", value: "Across India — remote first" },
              { icon: "🕐", label: "Response time", value: "Within 24 hours" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900">{c.label}</p>
                  <p className="text-gray-500">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="border border-gray-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Your Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                         placeholder-gray-400 focus:outline-none focus:border-blue-900" />
            <input type="email" placeholder="Your Email"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                         placeholder-gray-400 focus:outline-none focus:border-blue-900" />
            <textarea placeholder="Your Message" rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                         placeholder-gray-400 focus:outline-none focus:border-blue-900 resize-none" />
            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3
                               rounded-lg font-semibold transition">
              Send Message →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}