import React, { useState } from "react";
import HomeCarousel from "../component/Movie/HomeCarousel";
import NavBar from "../component/Navbar";
import ProfilePage from "./ProfilePage";

export default function HomePage() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      {/* truyền hàm mở form xuống Navbar */}
      <NavBar onOpenProfile={() => setShowProfile(true)} />

      <HomeCarousel />

      <div className="mt-4 text-center">
        <h4>Featured Movies Collections</h4>
        <p className="text-secondary">
          Thêm thông tin về các bộ sưu tập phim nổi bật ở đây.
        </p>
      </div>

      {/* overlay hiển thị form */}
      {showProfile && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
            overflowY: "auto",
            paddingTop: '200px',
          }}
        >
          <div
            className="bg-white rounded shadow-lg p-4 position-relative"
            style={{
              width: "90%",
              maxWidth: 850,
              borderRadius: "16px",
            }}
          >
            {/* nút X ở góc phải */}
            <button
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={() => setShowProfile(false)}
              aria-label="Close"
            ></button>

            <ProfilePage />
          </div>
        </div>
      )}

    </div>
  );
}
