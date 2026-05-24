export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for exploring LaunchPad",
      features: ["3 project ideas", "Community access", "Basic analytics", "Email support"],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹499",
      period: "per month",
      description: "For serious student founders",
      features: ["Unlimited ideas", "Mentor matching", "Advanced analytics",
                 "Priority support", "Early access to features"],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Team",
      price: "₹1,299",
      period: "per month",
      description: "For startup teams of up to 5",
      features: ["Everything in Pro", "5 team members", "Shared workspace",
                 "Investor connects", "Dedicated manager"],
      cta: "Contact Us",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white px-4 py-16">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-indigo-400">Simple, Transparent Pricing</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Start free. Upgrade when you're ready to scale.
        </p>
      </div>

      {/* PRICING CARDS — 1 col mobile, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 flex flex-col ${
              plan.highlight
                ? "bg-indigo-600 border-2 border-indigo-400 scale-105"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            {plan.highlight && (
              <span className="text-xs font-bold bg-white text-indigo-600 px-3 py-1
                               rounded-full self-start mb-4">
                MOST POPULAR
              </span>
            )}
            <h2 className="text-2xl font-bold mb-1">{plan.name}</h2>
            <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-400 ml-1">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-green-400">✓</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.highlight
                  ? "bg-white text-indigo-600 hover:bg-gray-100"
                  : "bg-indigo-500 hover:bg-indigo-600 text-white"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}