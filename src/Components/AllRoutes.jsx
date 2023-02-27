import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
