import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <main className="w-full pt-16 md:pt-20">
        <div className="relative h-[260px] w-full flex items-center">
            <div className="absolute inset-0 bg-black/30 z-0"></div>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">Contact Us</h1>
                <p className="text-xs tracking-widest font-bold text-black"><Link to="/">Home</Link> &nbsp; / &nbsp; Contact Us</p>
            </div>
        </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="bg-[#f7f3ee] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Have questions about our products or want to place an order?
              Reach out to us and our team will assist you.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <i className="bi bi-geo-alt text-2xl text-orange-500"></i>
                <p>
                  WoodQart Pvt. Ltd.<br />
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <i className="bi bi-telephone text-2xl text-orange-500"></i>
                <p>+91 99999 99999</p>
              </div>

              <div className="flex items-center gap-4">
                <i className="bi bi-envelope text-2xl text-orange-500"></i>
                <p>support@woodqart.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
