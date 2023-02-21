import React from "react";
import { Box, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
// import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

const Home = () => {
  const homePageStyles = {
    m: 5,
    fontWeight: "100",
    color: indigo[400],
    fontSize: "2em",
  };

  return (
    <Box>
      <Box sx={{ display: "flex", position: "relative", mt: 7 }}>
        <Typography component="div" variant="h1" sx={homePageStyles}>
          Products
        </Typography>
        {/* <AddProduct /> */}
      </Box>
      <ProductList />
    </Box>
  );
};

export default Home;
