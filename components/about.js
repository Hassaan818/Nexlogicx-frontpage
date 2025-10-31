export default function About() {
  const stats = [
    { number: "32+", label: "Years in AI Innovation" },
    { number: "20", label: "Clients Countries Worldwide" },
    { number: "4000+", label: "Projects Successfully Implemented" },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F34B1E] px-4 py-2 rounded-full mb-8">
          <span className="text-sm text-white">About Nexlogicx</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#112967] mb-6">About Nexlogicx</h2>
            <p className="text-[#666666] text-lg mb-4">
              Founded in 2021, Nexlogicx is a reliable and user-friendly Point of Sale (POS) system designed to simplify sales and stock management for small and medium-sized businesses.
            </p>
            <p className="text-[#666666] text-lg mb-8">
              Our goal is to make business operations easier — from managing daily sales to tracking inventory — all through one intuitive platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-[#282B27] mb-2">{stat.number}</div>
                  <div className="text-sm text-[#51564E]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img src="/about-image.png" alt="Team working" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

        </div>
      </div>
    </section>
  )
}
