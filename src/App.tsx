import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BackToTop } from "./components/ui/BackToTop";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Outlet />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
