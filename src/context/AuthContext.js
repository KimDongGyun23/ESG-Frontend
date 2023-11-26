import { removeCookie, getCookie } from "./cookie";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const cookie = getCookie("access-token");
  const navigate = useNavigate();
  const login = () => {
    // 로그인 로직 처리
    if (cookie) {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    // 로그아웃 로직 처리
    removeCookie("access-token");
    alert("로그아웃 되었습니다!");
    localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 내에서 사용되어야 합니다.");
  }
  return context;
};
