import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    const storedUser = localStorage.getItem("user");
    console.log("Logged in!", JSON.parse(storedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("logged out!");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
