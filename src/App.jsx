import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import RightSidebar from "./components/rightsidebar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact-Us";

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
  );
}

export default App;
