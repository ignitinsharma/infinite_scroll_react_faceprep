import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(() => {
    const storedIsAuth = JSON.parse(localStorage.getItem("isAuth"));
    return storedIsAuth ? storedIsAuth : false;
  });

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [isAuth]);

  const loginFunction = () => {
    setisAuth(true);
  };

  const logoutFunction = () => {
    setisAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginFunction, logoutFunction }}>
      {children}
    </AuthContext.Provider>
  );
};
