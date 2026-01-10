import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact-Us";
import RightSidebar from "./components/rightsidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
      <BrowserRouter>
        <Header setSidebarOpen={setSidebarOpen} />
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <RightSidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
  );
}

export default App;
