// src/components/LoginModal.tsx
import React, { useState } from "react";
import "./LoginModal.css";
import { useLogin_Logout } from "../hooks/useLoginLogout";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin_Logout();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(username, password);
    if (result.success) {
      onClose();
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
