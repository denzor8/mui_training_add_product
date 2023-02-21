import React from "react";
import Navbar from "./components/Navbar";
import ProductContextProvider from "./ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </>
  );
};

export default App;
