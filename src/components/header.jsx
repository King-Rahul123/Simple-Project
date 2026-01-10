const Header = ({ setSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 bg-white shadow-md z-10">
      <div className="h-full px-4 md:px-12 flex items-center">

        {/* ===== MOBILE HEADER ===== */}
        <div className="relative flex items-center justify-between w-full md:hidden">
          <button className="text-2xl" onClick={() => setSidebarOpen(true)}>
            <i className="bi bi-list"></i>
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-4xl text-orange-400">woodqart</h1>
          <button className="text-xs font-bold bg-orange-400 rounded-full px-3 py-1.5 text-white">Login</button>
        </div>

        {/* ===== DESKTOP HEADER ===== */}
        <div className="hidden md:flex items-center gap-6 w-full">
          <h1 className="text-3xl font-semibold text-orange-500">woodqart</h1>
          <div className="flex-1 relative">
            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input type="text" placeholder="Search Plywood Block Board Doors & Shuttering Ply" className="w-full border rounded-full px-5 py-2 pl-12 focus:outline-none"/>
          </div>
          <button className="flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300">
            <i className="bi bi-person text-xl"></i>
            <span>Login / Register</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
