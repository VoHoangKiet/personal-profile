import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from "./components/profilePage/ProfileCard";
import ZodiacPage from "./pages/ZodiacPage";
import "./App.css";
import { SakuraCDN } from "./components/profilePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SakuraCDN />
              <ProfileCard
                avatarSrc="/images/profile2.jpg"
                name="Võ Hồng Nhã Uyên"
                description="🌻 Y Học Cổ Truyền"
                backgroundImage="/images/background2.jpg"
              />
            </>
          }
        />
        <Route path="/zodiac" element={<ZodiacPage />} />
      </Routes>
    </Router>
  );
}
