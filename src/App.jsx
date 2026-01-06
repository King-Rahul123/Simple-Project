import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import RightSidebar from "./components/rightsidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header setSidebarOpen={setSidebarOpen} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <RightSidebar />
      <Home />
      {/* <ReadMoreSection /> */}
      <Footer />
    </>
  );
}

export default App;
