export default function Footer() {
  return (
    <footer className="w-full text-white py-12 md:py-16" style={{ backgroundColor: "#112967" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-[#E5E5E5]">
          <h3 className="text-2xl sm:text-3xl font-normal text-white leading-relaxed text-center md:text-left">
            Boost your sales with our <br className="hidden sm:block" /> powerful software
          </h3>

          <div className="flex justify-center md:justify-end">
            <button
              className="text-white bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645] 
                         font-semibold uppercase tracking-wider text-sm px-8 py-3 rounded-full 
                         transition-all hover:opacity-90 w-full sm:w-auto"
            >
              GET STARTED
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 py-10 border-b border-[#E5E5E5] text-center sm:text-left">

          <div>
            <h4 className="font-semibold text-white mb-4 text-base inline-block border-b-2 border-[#E5E5E5] pb-1">
              About Us
            </h4>
            <ul className="space-y-3">
              <li><p className="text-white">
                At Nexlogicx, we believe technology
                should make business management
                effortless.
              </p></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-base inline-block border-b-2 border-[#E5E5E5] pb-1">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-base inline-block border-b-2 border-[#E5E5E5] pb-1">
              Connect
            </h4>
            <div className="flex justify-center sm:justify-start gap-3">
              {["/facebook.png", "/instagram.png", "/x.png"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <img src={icon} alt="Social Icon" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-base inline-block border-b-2 border-[#E5E5E5] pb-1">
              Contact
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#2A4A7C]">

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <img
              src="/footer-logo1.png"
              alt="Nexlogicx Icon"
              className="h-8 w-auto object-contain align-middle"
            />
            <img
              src="/footer-logo2.png"
              alt="Nexlogicx Text"
              className="h-8 w-auto object-contain align-middle"
            />
          </div>

          <p className="text-white text-sm sm:text-base text-center sm:text-right">
            © 2025 Nexlogicx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
