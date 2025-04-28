// src/components/LoginModal.tsx
import React, { useState } from "react";
import "./LoginModal.css";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: any) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 세션 쿠키 포함
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data?.success) {
        onLoginSuccess(data?.user);
        onClose();
      } else {
        setError(data?.message || "로그인 실패");
      }
    } catch (err) {
      setError("서버 오류가 발생했습니다.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <label>
            사용자명:
            <input type="text" value={username} onChange={(e) => setUsername(e?.target?.value)} required />
          </label>
          <label>
            비밀번호:
            <input type="password" value={password} onChange={(e) => setPassword(e?.target?.value)} required />
          </label>
          {error && <p className="error">{error}</p>}
          <div className="modal-actions">
            <button type="submit">로그인</button>
            <button type="button" onClick={onClose}>
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
