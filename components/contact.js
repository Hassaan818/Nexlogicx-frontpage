export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#FBF9F5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjust grid spacing and alignment */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left Content */}
          <div className="pt-12">
            <div className="inline-flex items-center bg-[#F34B1E] px-4 py-2 rounded-full mb-8">
              <span className="text-sm font-semibold text-white">Share</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#EA5C1A] mb-6">
              Contact Us <br /> Anytime For Quick Assistance
            </h2>

            <p className="text-[#1C1C1C] text-lg leading-relaxed">
              We’re here to assist you — reach out for any questions or support.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:ml-12 lg:ml-16">
            <h3 className="text-lg font-medium text-[#444444] mb-6">
              Please fill out this form.
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#666666] mb-1.5">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA5C1A]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#666666] mb-1.5">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA5C1A]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-[#666666] mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA5C1A]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-[#666666] mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us a message..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA5C1A]"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#475467]">
                <input type="checkbox" id="privacy" className="w-4 h-4 accent-[#EA5C1A]" />
                <label htmlFor="privacy" className="cursor-pointer">
                  You agree to our friendly privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645] 
                           hover:opacity-90 text-white py-3.5 rounded-full 
                           font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
