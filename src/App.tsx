import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Landingpage } from "./pages/Landingpage";
import Footer from "./sections/Footer";
import Signup from "./pages/Signup";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
