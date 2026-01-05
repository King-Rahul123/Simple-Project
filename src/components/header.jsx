const Header = () => {
  return (
    <header className="w-full shadow-md">

      {/* ===== MAIN HEADER ===== */}
      <div className="bg-white">
        <div className="max-w-365 mx-auto px-6 py-4 flex items-center gap-6">

          {/* Logo */}
          <h1 className="text-3xl font text-orange-500">
            woodqart
          </h1>

          {/* Search Bar */}
          <div className="flex-1 relative">
            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>

            <input
              type="text"
              placeholder="Search Plywood Block Board Doors & Shuttering Ply"
              className="w-full border rounded-full px-5 py-2 pl-12 focus:outline-none"
            />
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
