import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const AllRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={isAuth ? <Home /> : <Login />} />
    </Routes>
  );
};

export default AllRoutes;
