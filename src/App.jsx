import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";

import HomePage from "./components/pages/HomePage.jsx";
import LayoutWithSidebar from "./components/organisms/DashboardLayout/LayoutWithSidebar.jsx";
import UpcomingPage from "./components/pages/UpcomingPage.jsx";
import TodayPage from "./components/pages/TodayPage.jsx";
import CalendarPage from "./components/pages/CalendarPage.jsx";
import StickyWallPage from "./components/pages/StickyWallPage.jsx";

export default function App() {
  return (
    <Routes>

      {/* Public pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* App pages wrapped with Sidebar layout */}
      <Route element={<LayoutWithSidebar />}>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/upcoming" element={<UpcomingPage/>}/>
        <Route path="/today" element={<TodayPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/sticky" element={<StickyWallPage/>}/>
      </Route>
    </Routes>
  );
};