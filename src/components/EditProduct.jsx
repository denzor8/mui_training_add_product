import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../ProductContext";

const EditProduct = () => {
  const { productToEdit, saveProduct } = useContext(productContext);
  const [editProduct, setEditProduct] = useState(productToEdit);

  useEffect(() => {
    setEditProduct(productToEdit);
  }, [productToEdit]);

  const handleInp = (e) => {
    let obj = {
      ...editProduct,
      [e.target.name]: e.target.value,
    };
    setEditProduct(obj);
  };

  const navigate = useNavigate();

  return (
    <>
      {editProduct ? (
        <Box
          sx={{
            display: "flex",
            margin: "15vmin auto",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ m: 2 }}
            id="outlined-basic"
            label="name"
            variant="outlined"
            name="name"
            onChange={handleInp}
            value={editProduct.name}
          />
          <TextField
            sx={{ m: 2 }}
            id="outlined-basic"
            label="description"
            variant="outlined"
            name="desc"
            onChange={handleInp}
            value={editProduct.desc}
          />
          <TextField
            sx={{ m: 2 }}
            id="outlined-basic"
            label="image"
            variant="outlined"
            name="image"
            onChange={handleInp}
            value={editProduct.image}
          />
          <Button
            sx={{ m: 2 }}
            variant="outlined"
            size="large"
            onClick={() => {
              saveProduct(editProduct);
              navigate("/");
            }}
            style={{ backgroundColor: "green", color: "white" }}
          >
            SAVE
          </Button>
        </Box>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditProduct;
