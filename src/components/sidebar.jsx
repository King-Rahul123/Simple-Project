import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
    const [activeTab, setActiveTab] = useState("menu");

  return (
    <div className={`fixed inset-0 z-40 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${ open ? "opacity-100" : "opacity-0"}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`absolute left-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between shadow-2xl">
          <div className="flex-1 relative">
            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input type="text" placeholder="Search Plywood Block Board Doors & Shuttering Ply" className="w-full px-6 py-4 pl-12 focus:outline-none"/>
          </div>
        </div>

        {/* ===== TABS ===== */}
        <div className="grid grid-cols-2 border-b border-gray-200 text-sm font-semibold">
          <button onClick={() => setActiveTab("menu")} className={`py-4 ${activeTab === "menu"? "text-black border-b-2 border-orange-500 bg-stone-300": "text-gray-500"}`}>MENU</button>
          <button onClick={() => setActiveTab("discover")} className={`py-4 p-5 ${activeTab === "discover"? "text-black border-b-2 border-orange-500 bg-stone-200": "text-gray-500"}`}>DISCOVER PLYWOOD</button>
        </div>

        {/* Menu Section */}
        {activeTab === "menu" && (
          <nav className="sidebar-menu">
            <li><Link to="/about" className="menu-item" onClick={() => setOpen(false)}><i className="bi bi-info-circle"></i>About Us</Link></li>
            <li><Link to="/contact-us" className="menu-item" onClick={() => setOpen(false)}><i className="bi bi-telephone"></i>Contact Us</Link></li>
            <li><Link to="/sell" className="menu-item" onClick={() => setOpen(false)}><i className="fas fa-shopping-cart"></i>Sell On WoodQart</Link></li>
            <li><Link to="/distributor" className="menu-item" onClick={() => setOpen(false)}><i className="fas fa-car"></i>Become Distributor</Link></li>
            <li><Link to="/work" className="menu-item" onClick={() => setOpen(false)}><i className="fas fa-briefcase"></i>Work With Us</Link></li>
            <li><Link to="#" className="menu-item" onClick={() => setOpen(false)}><i className="bi bi-book"></i>Success Stories</Link></li>
            <li><Link to="#" className="menu-item" onClick={() => setOpen(false)}><i className="fas fa-calendar-alt"></i>Book Visit</Link></li>
          </nav>
        )}

        {/*Discover Plywood Section */}
        {activeTab === "discover" && (
          <nav className="sidebar-plywood">
            <a href="#" className="plywood-item">Marine Grade / BWP Plywood</a>
            <a href="#" className="plywood-item">Red Core Plywood</a>
            <a href="#" className="plywood-item">Alternate Plywood</a>
            <a href="#" className="plywood-item">Semi Alternate Plywood</a>
            <a href="#" className="plywood-item">Super MR / Commercial Ply</a>
            <a href="#" className="plywood-item">Water Proof - Flush Door</a>
            <a href="#" className="plywood-item">MR - Flush Door</a>
            <a href="#" className="plywood-item">Block Board</a>
            <a href="#" className="plywood-item">Shuttering Ply</a>
            <a href="#" className="plywood-item">Core & Veneers</a>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
