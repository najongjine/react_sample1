import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import LoginModal from "./LoginModal";

const Header: React.FC = () => {
  const { user, setUser, logout } = useAuthStore();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      if (data.success) {
        logout();
        navigate("/"); // 로그아웃 후 홈으로 이동
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <h1>My App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/list_sample">List Sample</Link>
        </nav>
      </div>
      <div style={{ float: "right" }}>
        {user ? (
          <div>
            <span>{user?.username}</span>
            <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => setLoginModalOpen(true)}>Login</button>
        )}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} onLoginSuccess={setUser} />
    </header>
  );
};

export default Header;
