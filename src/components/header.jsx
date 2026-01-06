const Header = ({setSidebarOpen}) => {
  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50 bg-white">
        <div className="max-w-365 mx-auto px-6 py-4">

          {/* ===== MOBILE HEADER ===== */}
          <div className="relative flex items-center justify-between md:hidden">
            <button className="text-2xl z-10" onClick={() => setSidebarOpen(true)}><i className="bi bi-list"></i></button>
            <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold text-orange-500">woodqart</h1>
            <button className="text-2xl z-10"><i className="bi bi-person"></i></button>
          </div>

          {/* DESKTOP HEADER */}
          <div className="hidden md:flex items-center gap-6">
            {/* Logo */}
            <h1 className="text-3xl font text-orange-500">woodqart</h1>

            {/* Search Bar */}
            <div className="flex-1 relative">
              <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input type="text" placeholder="Search Plywood Block Board Doors & Shuttering Ply" className="w-full border rounded-full px-5 py-2 pl-12 focus:outline-none" />
            </div>

            {/* Login */}
            <button className="flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300">
              <span className="text-xl"><i className="bi bi-person"></i></span>
              <span>Login / Register</span>
            </button>
          </div>
        </div>
    </header>
  );
};

export default Header;
