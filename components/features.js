export default function Features() {
  const features = [
    {
      icon: "/chart-column-big.png",
      title: "Sales & Stock Management",
      description: "Streamline your sales process and inventory with real-time tracking and simple order management.",
    },
    {
      icon: "/clipboard-minus.png",
      title: "Reports & Insights",
      description: "Understand your business better with comprehensive reports and actionable insights.",
    },
    {
      icon: "/layout-dashboard.png",
      title: "User-Friendly Dashboard",
      description: "Clean interface designed for teams. No learning curve, just intuitive productivity.",
    },
  ]

  return (
    <section id="features" className="w-full bg-[#FBF9F5] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex mb-8">
          <div className="inline-flex items-center gap-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-xl">
            <span className="bg-[#F34B1E] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Share
            </span>
            <span className="text-[#131313]">
              Powerful tool Simple Workflow
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#F34B1E] mb-4">
          Boost Your Sales Fast
        </h2>
        <p className="text-[#1C1C1C] text-lg mb-12 max-w-2xl">
          From billing to stock control — Nexlogicx handles it all in one place.
        </p>

        {/* Features Grid */}
        <div className="bg-[#FFA06E1A] p-5 rounded-4xl grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#FBF9F5] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#F34B1E] rounded-lg flex items-center justify-center text-2xl mb-4">
                <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
              </div>
              <h3 className="w-full text-xl font-semibold text-[#1C1C1C] mb-3">{feature.title}</h3>
              <p className="text-[#666666]">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
