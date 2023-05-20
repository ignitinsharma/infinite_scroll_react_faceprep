import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Logout from "../Pages/Logout";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const AllRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={isAuth ? <Home /> : <Login />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default AllRoutes;
