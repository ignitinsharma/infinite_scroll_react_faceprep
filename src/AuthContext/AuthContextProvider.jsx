import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);

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
