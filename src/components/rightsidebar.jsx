import { useState } from "react";

const RightSidebar = () => {
  // OPEN BY DEFAULT
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-1">

      {/* TOGGLE ARROW */}
      <div className="w-10 h-10 bg-black flex items-center justify-center text-white cursor-pointer shadow-lg" onClick={() => setOpen(!open)}>
        <i className={`bi ${open ? "bi-arrow-right" : "bi-arrow-left"}`}></i>
      </div>

      {/* ===== SIDEBAR CONTENT ===== */}
      {open && (
        <>
            {/* Reach Us */} 
            <div className="group flex items-center overflow-hidden cursor-pointer">
                <div className="w-10 h-32 bg-yellow-500 flex items-center justify-center"> <span className="rotate-90 text-white font-semibold text-sm flex items-center gap-2 overflow-visible whitespace-nowrap">
                    <i className="bi bi-envelope"></i> Reach Us</span> 
                </div>
            </div>
        
            {/* WhatsApp */}
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="group flex items-center overflow-hidden cursor-pointer">
                <div className="bg-green-500 text-white px-4 py-4 whitespace-nowrap transform translate-x-full group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2">
                    <i className="bi bi-whatsapp"></i>
                    WhatsApp
                </div>
                <div className="w-10 h-16 bg-green-500 flex items-center justify-center text-white">
                    <i className="bi bi-whatsapp text-xl"></i>
                </div>
            </a>

            {/* Call */}
            <a href="tel:+919999999999" className="group flex items-center overflow-hidden cursor-pointer">
                <div className="bg-yellow-500 text-white px-4 py-4 whitespace-nowrap transform translate-x-full group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2">
                <i className="bi bi-telephone-fill"></i>
                Call Us
                </div>
                <div className="w-10 h-16 bg-yellow-500 flex items-center justify-center text-white">
                <i className="bi bi-telephone-fill text-lg"></i>
                </div>
            </a>
        </>
      )}
    </div>
  );
};

export default RightSidebar;
