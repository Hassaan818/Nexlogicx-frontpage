export default function Trial() {
  // Features array
  const features = [
    'Sales Management System',
    'Stock Management',
    'Daily & Monthly Reports',
    'User Dashboard',
    'Invoice Generation',
    'Secure Data Storage',
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-[#FBF9F5] py-8 md:py-12 px-6 md:px-12 lg:px-16"
      style={{ backgroundImage: 'url(/trail-background.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center px-6 py-2.5 rounded-full mb-6 bg-gradient-to-r from-[#FB432C] to-[#FF591E]">
              <span className="text-sm font-medium text-white">Free for 30 Days</span>
            </div>
            <h2 className="text-5xl md:text-[56px] lg:text-[64px] leading-tight mb-8" style={{ color: '#1C3664' }}>
              Start now<br />
              your <span className="font-semibold" style={{ color: '#112967' }}>free plan</span>
            </h2>
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-[#FFE9DD] p-8 shadow-lg">
                <p className="text-[#112967]">
                  Enjoy our 1-month free trial to explore everything we offer. Once you’re ready, pick a plan that grows with your business—no hidden fees, just value.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div
              className="rounded-3xl p-8 shadow-xl w-full max-w-sm"
              style={{
                background: 'linear-gradient(135deg, #F16B29 0%, #EA5C1A 100%)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-1">Professional</h3>
                <p className="text-white text-sm opacity-90">Starting at</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-bold text-white">$0</span>
                  <span className="text-lg text-white opacity-90">Per Month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <img src="/tick-mark.svg" alt="checkmark" className="w-5 h-5 mt-0.5" />
                    <span className="text-white text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-full font-bold text-[#F34B1E] transition-all text-sm tracking-wide uppercase bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
