export default function Contact() {

  return (
    <section id="contact" className="w-full bg-[#FBF9F5] py-8 md:py-14 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Bottom right background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFE5D9] rounded-tl-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Form Side */}
          <div className="w-full max-w-xl">
            <div className="inline-flex items-center bg-[#FF5722] px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm font-medium text-white">Get in touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-[#112967] mb-4 leading-tight">
              Contact <span className="font-semibold">Us</span>
            </h2>

            <p className="text-[#666666] text-base mb-8">
              We'd love to hear from you. Please fill out this form.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#344054] mb-2">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-sm placeholder:text-[#98A2B3]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#344054] mb-2">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-sm placeholder:text-[#98A2B3]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-[#344054] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-sm placeholder:text-[#98A2B3]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-[#344054] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us a message..."
                  rows="4"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-sm resize-none placeholder:text-[#98A2B3]"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 mt-0.5 accent-[#FF5722] border-[#D0D5DD] rounded cursor-pointer"
                />
                <label htmlFor="privacy" className="text-sm text-[#475467] cursor-pointer leading-tight">
                  You agree to our friendly privacy policy.
                </label>
              </div>

              <button
                className="w-full bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645] hover:from-[#F47230] hover:to-[#EA5C1A] text-white py-3 rounded-full 
             font-semibold transition-all duration-200 text-base shadow-sm"
              >
                Send Message
              </button>


            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative hidden md:flex items-start justify-center">
            <div className="relative w-full max-w-md">
              {/* White container with shadow matching the design */}
              <div className="bg-transparent rounded-3xl p-6 shadow-lg border border-[#FF5722]">
                <img
                  src="/contact-bg.png"
                  alt="Contact"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}