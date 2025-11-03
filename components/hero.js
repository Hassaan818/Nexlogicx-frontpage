export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#FFF9F5] py-12 md:py-24 mt-12">
      {/* --- Background Layer --- */}
      <div className="absolute inset-0 z-0">
        {/* Large soft radial glow */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/background.svg')",
            backgroundSize: "obtain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>

        {/* Subtle elliptical orange arc */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at 50% 0%,
                rgba(255, 155, 80, 0.25) 0%,
                rgba(255, 200, 160, 0.15) 25%,
                rgba(255, 249, 245, 0) 70%
              )
            `,
            transform: "scaleY(1.2)",
            filter: "blur(40px)",
          }}
        ></div>
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Feature Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-[#FEEFE7] border border-[#F9D7C2] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            <span className="bg-[#F34B1E] text-white text-xs font-semibold px-3 py-1 rounded-full">
              New
            </span>
            <span className="text-[#131313]">
              We’ve just released a new feature →
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-[#112967]">Encourage Your </span>
            <span className="text-[#F34B1E]">Sales</span>
            <br />
            <span className="text-[#112967]">Team to Excel</span>
          </h1>
          <p className="text-[#5C6A8D] text-xl max-w-2xl mx-auto mb-8">
            Our goal is to make business operations easier, from managing daily
            sales to tracking inventory, all through one intuitive platform.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-12">
          <button
            className="bg-[#F34B1E] cursor-pointer
                       text-white font-semibold rounded-full px-6 py-2.5 text-sm
                       shadow-lg hover:opacity-90 transition-all"
          >
            GET STARTED
          </button>
        </div>

        {/* Dashboard Image */}
        <div className="relative">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <img
              src="/dashboard-image.png"
              alt="Nexlogicx Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
