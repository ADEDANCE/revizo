import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import Footer from "../sections/Footer";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;