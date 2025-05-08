import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { useLogin_Logout } from "../hooks/useLoginLogout";
import LoginModal from "./LoginModal";

const Header: React.FC = () => {
  const { handleLogout, error } = useLogin_Logout();
  const { user, setUser, logout } = useAuthStore();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <h1>My App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/list_sample">List Sample</Link>|{" "}
          <Link to="/miliseconds">miliseconds</Link>
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
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </header>
  );
};

export default Header;
