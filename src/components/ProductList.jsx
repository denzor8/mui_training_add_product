import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useEffect } from "react";
import { productContext } from "../ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {products.map((item, ind) => (
        <ProductCard product={item} key={ind} />
      ))}
    </Box>
  );
};

export default ProductList;
