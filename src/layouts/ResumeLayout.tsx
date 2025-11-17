import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BackToTop } from "../components/ui/BackToTop";

const ResumeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

export default ResumeLayout;

