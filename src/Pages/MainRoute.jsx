import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UpdateNote from "./UpdateNote";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/updatenote" element={<UpdateNote />}>
        Update
      </Route>
    </Routes>
  );
};

export default MainRoute;
