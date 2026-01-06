import React from "react";

function Navbar({ open, onClose }) {
  if (!open)
    return
      // <div>
      //   {/* ===== TOP BAR ===== */}
      //   <div className="bg-gray-200 text-sm text-gray-700">
      //     <div className="max-w-365 mx-auto px-6 py-2 flex justify-between">

      //       {/* Left */}
      //       <div className="flex gap-8">
      //         <span className="cursor-pointer hover:text-orange-500"><i className="bi bi-bag"></i> Orders</span>
      //         <span className="cursor-pointer hover:text-orange-500"><i className="bi bi-file-earmark"></i> Certificate</span>
      //         <span className="cursor-pointer hover:text-orange-500"><i className="bi bi-calendar"></i> Book Visit</span>
      //       </div>

      //       {/* Right */}
      //       <div className="flex items-right gap-8">|
      //         <span className="cursor-pointer">Customer Support</span>
      //         <span className="font-medium cursor-pointer"><i className="bi bi-telephone"></i> +91-9984000152</span>
      //       </div>

      //     </div>
      //   </div>
      // </div>
    ;

  return (
    <div>
      {/*Main Navbar*/}
      <div className="nav-overlay">
        <div className="nav">
          <div className="close" onClick={onClose}>✖</div>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Sell on WoodQart</p>
          <p>Become Distributor</p>
          <p>Work With Us</p>
          <p>Success Stories</p>
          <p>Book Visit</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
