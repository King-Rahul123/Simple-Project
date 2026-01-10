import { useState } from "react";

const RightSidebar = () => {
  // OPEN BY DEFAULT
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">

      {/* TOGGLE ARROW */}
      <div className="w-10 h-10 bg-black flex items-center justify-center text-white cursor-pointer shadow-lg" onClick={() => setOpen(!open)}>
        <i className={`bi ${open ? "bi-arrow-right" : "bi-arrow-left"}`}></i>
      </div>

      {/* ===== SIDEBAR CONTENT ===== */}
      {open && (
        <>
          {/* ===== Reach Us ===== */}
          <div className="group relative flex items-center">
            {/* FORM PANEL */}
            <div className="mt-60 absolute right-10 opacity-0 invisible translate-x-8 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 ease-out">
              <div className="w-100 bg-white shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-orange-500">Reach Us</h2>
                  <button className="text-gray-300 hover:text-gray-500 text-2xl">✕</button>
                </div>
                <form className="space-y-5">
                  <input className="w-full rounded-full border px-3 py-2" placeholder="Name" />
                  <input className="w-full rounded-full border px-3 py-2" placeholder="Phone*" />
                  <input className="w-full rounded-full border px-3 py-2" placeholder="Email*" />
                  <textarea className="w-full rounded-3xl border px-3 py-2 resize-none" rows="6" placeholder="Message" />
                  <button className="w-full bg-orange-500 text-white py-4 rounded-full">Submit</button>
                </form>
              </div>
            </div>

            <div className="w-10 h-32 bg-yellow-500 flex items-center justify-center cursor-pointer shadow-lg">
              <span className="rotate-90 text-white font-semibold text-sm flex items-center gap-2 whitespace-nowrap"><i className="bi bi-envelope"></i> Reach Us</span>
            </div>
          </div>

      
          {/* WhatsApp */}
          <a href="https://wa.me/918145322318" target="_blank" rel="noreferrer" className="group flex items-center overflow-hidden cursor-pointer">
            <div className="bg-green-500 text-white px-8 py-3 absolute right-10 opacity-0 invisible translate-x-full group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 ease-out">
              WhatsApp
            </div>
            <div className="w-10 h-12 bg-green-500 flex items-center justify-center text-white relative z-10">
              <i className="bi bi-whatsapp text-xl"></i>
            </div>
          </a>

          {/* Call */}
          <a href="tel:+919999999999" className="group flex items-center cursor-pointer">
            <div className="bg-yellow-500 text-white px-8 py-3 transform translate-x-full group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2 whitespace-nowrap absolute right-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible ease-out">
              Call Us
            </div>
            <div className="w-10 h-12 bg-yellow-500 flex items-center justify-center text-white relative z-10">
              <i className="bi bi-telephone-fill text-lg"></i>
            </div>
          </a>
        </>
      )}
    </div>
  );
};

export default RightSidebar;
