import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Home from "./components/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
