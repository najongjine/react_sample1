import React from "react";
import "./LoginModal.css";
import { useLogin_Logout } from "../hooks/useLoginLogout";
import { useLoginForm } from "./LoginModal.hook"; // 추가

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { login, error } = useLogin_Logout();
  const { values, errors, handleChange, validate } = useLoginForm({ username: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const result = await login(values.username, values.password);
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
            <input type="text" name="username" value={values.username} onChange={handleChange} required />
          </label>
          {errors.username && <p className="error">{errors.username}</p>}

          <label>
            비밀번호:
            <input type="password" name="password" value={values.password} onChange={handleChange} required />
          </label>
          {errors.password && <p className="error">{errors.password}</p>}

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
