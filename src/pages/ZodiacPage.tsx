import {
  FaSeedling,
  FaCrown,
  FaFire,
  FaHeart,
  FaStar,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { delay } from "../utils/delay";
import "./ZodiacPage.css";

export default function ZodiacPage() {
  const navigate = useNavigate();

  const handleBackToSakura = async () => {
    await delay(500);
    navigate("/");
  };

  return (
    <div className="zodiac-page">
      {/* Cosmic Background */}
      <div className="cosmic-background" />

      {/* Stars */}
      <div className="stars-container">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="stars-container">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula Effect */}
      <div className="nebula-effect">
        <div className="nebula-blob nebula-purple" />
        <div className="nebula-blob nebula-pink" />
        <div className="nebula-blob nebula-blue" />
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackToSakura}
        className="back-button"
        title="Quay về trang hoa anh đào"
      >
        <FaSeedling className="text-lg" />
      </button>

      {/* Main Content */}
      <div className="zodiac-content">
        <div className="zodiac-card">
          {/* Avatar */}
          <div className="zodiac-avatar">
            <img
              src="/images/profile2.jpg"
              alt="Võ Hồng Nhã Uyên"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="zodiac-name">Võ Hồng Nhã Uyên</h1>

          {/* Zodiac Info */}
          <div className="zodiac-info">
            <div className="zodiac-sign">
              <FaCrown className="zodiac-icon" />
              <span className="zodiac-title">Cung Sư Tử</span>
            </div>
            <p className="zodiac-dates">23/07 - 22/08</p>
            <p className="zodiac-element">🔥 Nguyên tố: Lửa</p>
          </div>

          {/* Zodiac Traits */}
          <div className="zodiac-traits">
            <div className="trait-item">
              <FaHeart className="trait-icon" />
              <span>Lãnh đạo bẩm sinh</span>
            </div>
            <div className="trait-item">
              <FaFire className="trait-icon" />
              <span>Nhiệt huyết & Đam mê</span>
            </div>
            <div className="trait-item">
              <FaStar className="trait-icon" />
              <span>Hào phóng & Tử tế</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
