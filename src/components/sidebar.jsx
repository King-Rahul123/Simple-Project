const Sidebar = ({ open, setOpen }) => {
  return (
    <div
  className={`fixed inset-0 z-40 transition ${
    open ? "pointer-events-auto" : "pointer-events-none"
  }`}
>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`absolute left-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-orange-500">WoodQart</h2>
          <button onClick={() => setOpen(false)}>
            <i className="bi bi-x-lg text-xl"></i>
          </button>
        </div>

        {/* Links */}
        <nav className="p-6 space-y-4 font-medium text-gray-700">
          <a href="#" className="block hover:text-orange-500">Home</a>
          <a href="#" className="block hover:text-orange-500">Products</a>
          <a href="#" className="block hover:text-orange-500">Assurance</a>
          <a href="#" className="block hover:text-orange-500">About Us</a>
          <a href="#" className="block hover:text-orange-500">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
