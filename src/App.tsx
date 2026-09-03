import { BrowserRouter, Routes, Route } from "react-router";
import { Landingpage } from "./pages/Landingpage";
import Signup from "./pages/Signup";
import { Login } from "./pages/Login";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import PublicLayout from "./layout/PublicLayout";
import { History } from "./pages/History";
import StudySession from "./pages/StudySession";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
        </Route>

        <Route path="/study/:id" element={<StudySession />} />
        {/* <Route path="/history/:id" element={<StudySession />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
