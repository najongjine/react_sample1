// src/hooks/useLogin.ts
import { useState } from "react";

export function useLogin(onLoginSuccess: (user: any) => void) {
  const [error, setError] = useState("");

  const login = async (username: string, password: string) => {
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
      console.log(`## data:`, data);

      if (data?.success) {
        onLoginSuccess(data.user);
        return { success: true };
      } else {
        setError(`아이디나 비밀번호가 잘못되었습니다.\n${data?.message ?? ""}`);
        return { success: false };
      }
    } catch (err) {
      setError("서버 오류가 발생했습니다.");
      return { success: false };
    }
  };

  return { login, error };
}
