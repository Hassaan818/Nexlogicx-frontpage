export default function Trial() {
  return (
    <section id="pricing" className="w-full bg-[#FBF9F5] py-8 md:py-20">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="pt-16">

            <div className="inline-flex items-center px-5 py-2 rounded-full mb-8" style={{ backgroundColor: '#FF5438' }}>
              <span className="text-sm text-white">Free for 30 Days</span>
            </div>

            <h2 className="text-[52px] font-bold text-[#1C3664] mb-6 leading-[1.15]">
              Enjoy a Free 1-Month Trial, Upgrade Anytime to Continue
            </h2>
            <p className="text-[#1C1C1C] text-lg">
              No upfront payment required — pay only if you love it.
            </p>
          </div>

          {/* Right Pricing Card */}
          <div className="bg-white rounded-2xl p-10 shadow-2xl" style={{ maxWidth: '420px', marginLeft: 'auto' }}>
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-[#112967] mb-0">Professional</h3>
              <div className="text-lg font-semibold mt-1" style={{ color: '#F34B1E' }}>Starting at</div>
            </div>

            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-semibold text-[#1C1C1C]">$0</span>
                <span className="text-sm text-[#1C1C1C]">/Month</span>
              </div>
              <div className="text-sm text-[#1C1C1C] mt-2">Monthly Subscription</div>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF5438' }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#162B60] text-sm font-medium">Sales Management System</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF5438' }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#162B60] text-sm font-medium">Stock Management</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF5438' }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#162B60] text-sm font-medium">Daily & Monthly Reports</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF5438' }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#162B60] text-sm font-medium">User Dashboard</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF5438' }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#162B60] text-sm font-medium">Invoice Generation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF5438' }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#162B60] text-sm font-medium">Secure Data Storage</span>
              </li>
            </ul>

            <button className="w-full text-white py-3.5 rounded-full font-bold transition-colors text-sm tracking-wider uppercase" style={{ backgroundColor: '#112967' }}>
              GET STARTED
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}