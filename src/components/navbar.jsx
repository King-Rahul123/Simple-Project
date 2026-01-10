import React from "react";

function Navbar({ open}) {
  if (!open)
    return null;

  return (
    <div>
      <div className="nav-overlay">
        <div className="nav">
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
